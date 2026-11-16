import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';

const root = process.cwd();
const htmlPath = resolve(root, 'index.html');
const cssPath = resolve(root, 'css/styles.css');
const jsPath = resolve(root, 'js/main.js');
const assetsIgnorePath = resolve(root, '.assetsignore');

const errors = [];
const html = readFileSync(htmlPath, 'utf8');
const css = readFileSync(cssPath, 'utf8');
const assetsIgnore = readFileSync(assetsIgnorePath, 'utf8');

function check(condition, message) {
  if (!condition) errors.push(message);
}

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
const idSet = new Set(ids);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
check(duplicateIds.length === 0, `IDs HTML duplicados: ${[...new Set(duplicateIds)].join(', ')}`);

const expectedSections = ['hero', 'paquetes', 'como-trabajo', 'trabajos', 'faq', 'contacto'];
const sectionIds = [...html.matchAll(/<section\b[^>]*\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
check(
  expectedSections.every((id, index) => sectionIds[index] === id),
  `Las secciones principales deben estar en este orden: ${expectedSections.join(' → ')}`
);
check((html.match(/<h1\b/gi) || []).length === 1, 'Debe existir exactamente un H1.');
check((html.match(/class=["'][^"']*\bfaq-item\b/gi) || []).length === 10, 'Deben existir exactamente 10 preguntas frecuentes.');

const missingAnchors = [...html.matchAll(/href=["']#([^"']+)["']/gi)]
  .map((match) => match[1])
  .filter((id) => !idSet.has(id));
check(missingAnchors.length === 0, `Enlaces internos sin destino: ${[...new Set(missingAnchors)].join(', ')}`);

const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
for (const [index, tag] of imageTags.entries()) {
  check(/\balt=["'][^"']+["']/i.test(tag), `La imagen ${index + 1} no tiene texto alternativo.`);
  check(/\bwidth=["']\d+["']/i.test(tag) && /\bheight=["']\d+["']/i.test(tag), `La imagen ${index + 1} debe declarar width y height.`);
  check(/\bloading=["']lazy["']/i.test(tag), `La imagen ${index + 1} debe usar carga diferida.`);
}

const localRefs = [...html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)]
  .map((match) => match[1])
  .filter((value) => value && !/^(?:#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(value));
for (const ref of localRefs) {
  const cleanPath = decodeURIComponent(ref.split(/[?#]/, 1)[0]);
  const absolutePath = resolve(root, cleanPath);
  const relativePath = relative(root, absolutePath);
  check(
    !relativePath.startsWith(`..${sep}`) && relativePath !== '..' && existsSync(absolutePath),
    `Recurso local no encontrado o fuera del proyecto: ${ref}`
  );
}

check(/<meta\s+name=["']description["']/i.test(html), 'Falta meta description.');
check(/<meta\s+property=["']og:title["']/i.test(html), 'Falta Open Graph title.');
check(/@media[^{}]*\b(?:min|max)-width\s*:/i.test(css), 'No se encontraron media queries responsive.');
check(existsSync(jsPath), 'No se encontró js/main.js.');
check(/^scripts\/\*\*$/m.test(assetsIgnore), 'La carpeta scripts/ debe excluirse de los assets públicos.');
check(/^\.github\/\*\*$/m.test(assetsIgnore), 'La configuración de GitHub debe excluirse de los assets públicos.');

if (errors.length) {
  console.error('RX Web Studio: controles de calidad fallidos');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('RX Web Studio: controles de calidad correctos');
  console.log(`- ${sectionIds.length} secciones principales verificadas`);
  console.log('- 10 preguntas frecuentes verificadas');
  console.log(`- ${imageTags.length} imágenes con alt, dimensiones y carga diferida`);
  console.log('- IDs, enlaces internos, recursos locales y metadatos básicos verificados');
}
