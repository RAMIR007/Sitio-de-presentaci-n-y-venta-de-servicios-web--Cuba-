# Proyecto: Sitio de presentación y venta de servicios web (Cuba)

## Contexto

Sitio estático de una o pocas páginas para presentar servicios de diseño y
desarrollo web a clientes en Cuba. El objetivo es convertir visitantes en
conversaciones por WhatsApp. El público navega mayoritariamente desde móviles
con datos limitados y conexiones lentas. Los precios se expresan en USD;
la equivalencia en CUP se muestra solo como referencia secundaria al cambio
de 800 CUP = 1 USD.

## Restricciones críticas (no negociables)

- 100% estático: HTML, CSS y JavaScript mínimo. Sin backend, sin base de datos,
  sin framework de UI pesado.
- Prioridad absoluta: peso ligero y velocidad en móvil. Ninguna página debe
  superar ~500 KB de peso total (sin contar imágenes grandes; estas deben
  comprimirse a WebP/AVIF y no superar 150 KB cada una).
- Mobile first: diseña primero para 360px y luego adapta a desktop (768px, 1280px).
- Accesibilidad básica: contraste suficiente, textos legibles (mínimo 16px en
  móvil), etiquetas en formularios y navegación por teclado.
- El contenido principal debe funcionar sin JavaScript; el JS solo mejora la
  experiencia (menú, acordeón, validación).
- No inventar endpoints, servicios ni datos. Los enlaces de WhatsApp usan
  el número definido en el contenido (placeholder 53XXXXXXXXX que el dueño
  reemplazará).

## Stack técnico decidido (no cambiar sin consultar)

- HTML semántico escrito a mano, un solo archivo `index.html`.
- CSS moderno (Grid, Flexbox, variables en :root) en `css/styles.css`.
- JavaScript mínimo en `js/main.js` (menú móvil, acordeón FAQ, validación).
- Imágenes en WebP, con width/height y loading="lazy".
- Una sola fuente del sistema o variable ligera; sin descargar familias completas.
- Hosting: Cloudflare Pages. Control de versiones: Git + GitHub.
- Sin WordPress, sin React/Next, sin backend propio.

## Estructura del sitio (6 secciones en este orden)

1. Hero
2. Paquetes (3 tarjetas)
3. Cómo trabajo (4 pasos)
4. Trabajos (galería + texto honesto)
5. Preguntas frecuentes (acordeón)
6. Contacto (WhatsApp + correo) y nota de pagos

## Contenido exacto (usar tal cual, sin reescribir)

### 1. Hero

H1: "Sitios web que hacen crecer tu negocio en Cuba"
Subtítulo: "Diseño y desarrollo páginas rápidas, claras y adaptadas a móviles.
Sin complicaciones, con pago flexible en USD y entrega en semanas, no en meses."
CTA: "Escríbeme por WhatsApp" → https://wa.me/53XXXXXXXXX?text=Hola,%20quiero%20información%20sobre%20un%20sitio%20web
Texto pequeño: "Acepto pagos en USD vía Transfermóvil (Tarjeta Clásica), efectivo,
o directamente en el exterior si estás fuera de Cuba."

### 2. Paquetes

#### Paquete 1 — Presencia Esencial (Landing page)

Descripción: "Ideal para emprendedores y profesionales que necesitan estar en
internet ya, con una página clara y contacto directo."
Incluye:

- Una página con diseño moderno y adaptado a móviles.
- Secciones: presentación, servicios, sobre ti y contacto.
- Botón de WhatsApp con mensaje prellenado.
- Publicación en hosting gratuito (subdominio incluido).
- Optimización de velocidad y SEO básico.
  Plazo: 5–7 días hábiles.
  Precio: $150 – $250 USD (50% anticipo, 50% contra entrega).
  Botón: "Solicitar este paquete" → https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Presencia%20Esencial

#### Paquete 2 — Sitio Profesional (Multipágina + catálogo)

Descripción: "Para negocios que ya tienen clientes y quieren transmitir
confianza, mostrar su oferta en detalle y recibir pedidos por WhatsApp."
Incluye:

- 4 a 6 secciones o páginas (inicio, servicios/menú, sobre nosotros, galería, contacto).
- Catálogo visual con fotos y descripciones (sin carrito; pedido por WhatsApp o formulario).
- Diseño responsive y accesibilidad básica.
- SEO básico para aparecer en Google.
- Publicación en hosting gratuito o dominio propio (el dominio lo paga el cliente).
- 1 ronda de ajustes incluida.
  Plazo: 2–3 semanas.
  Precio: $400 – $650 USD (50% anticipo, 50% contra entrega).
  Botón: "Solicitar este paquete" → https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Sitio%20Profesional

#### Paquete 3 — Tienda o Catálogo con pedidos

Descripción: "Para negocios que venden productos o reciben reservas de forma
recurrente y necesitan automatizar los pedidos sin depender de mensajes manuales."
Incluye:

- Catálogo con carrito o flujo de reserva.
- Integración de pedido por WhatsApp (carrito → mensaje con resumen) o pasarela
  local si el cliente la tiene (Transfermóvil / EnZona / QR).
- Panel simple para que actualices productos y precios (sin conocimientos técnicos).
- Formulario de pedido validado.
- Capacitación breve (video o llamada).
- 2 rondas de ajustes y 30 días de soporte para corregir errores.
  Plazo: 4–6 semanas.
  Precio: $800 – $1,200 USD (más costo de pasarela/dominio si aplica.
  50% anticipo, 50% contra entrega).
  Botón: "Solicitar este paquete" → https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Tienda%20con%20pedidos

### 3. Cómo trabajo (4 pasos)

1. Conversación inicial — "Hablamos por WhatsApp, entiendo tu negocio y qué necesitas."
2. Propuesta y anticipo — "Te envío el alcance, plazo y precio. Con el 50% reservo tu turno."
3. Desarrollo — "Construyo el sitio y te muestro avances para ajustar sobre la marcha."
4. Entrega y ajustes — "Publico el sitio, revisamos juntos y hago los ajustes incluidos."

### 4. Trabajos

Texto: "Estos son proyectos de muestra. Tu negocio puede ser el primero de esta lista."
Galería: 2–3 tarjetas con imagen (WebP), nombre del proyecto demo, tipo de
negocio ficticio y una frase de qué resuelve. Sin enlaces falsos; si no hay
proyecto real aún, mostrar solo las tarjetas demo con su descripción.

### 5. Preguntas frecuentes (acordeón, usar estas 10)

1. ¿Quién pone el hosting? — "El hosting gratuito está incluido. Si quieres dominio
   propio, lo pagas aparte y yo lo configuro."
2. ¿Puedo actualizar el sitio yo? — "Depende del paquete. El Paquete 3 incluye un
   panel simple. En los otros puedo enseñarte o cotizar mantenimiento."
3. ¿Cuánto tarda? — "Paquete 1: 5–7 días. Paquete 2: 2–3 semanas. Paquete 3: 4–6 semanas."
4. ¿Cómo pago? — "50% de anticipo y 50% contra entrega. En USD vía Transfermóvil
   (Tarjeta Clásica), efectivo, o directamente en el exterior."
5. ¿Qué pasa si quiero cambios después? — "Tienes 15–30 días de garantía para
   errores técnicos. Los cambios de diseño se cotizan aparte."
6. ¿Trabajas con clientes fuera de Cuba? — "Sí. Puedes pagar en el exterior
   (PayPal/PYUSD vía QvaPay, transferencia internacional o recarga con Tocopay)."
7. ¿El sitio aparecerá en Google? — "Incluyo SEO básico. El posicionamiento avanzado
   se cotiza aparte."
8. ¿Qué necesito darte? — "Logo, textos y fotos si los tienes. Si no, te ayudo a
   redactarlos."
9. ¿Hay mantenimiento? — "Es opcional, con una cuota anual de referencia del 25%
   del presupuesto inicial."
10. ¿Qué no incluye? — "Fotografía profesional, redacción de textos legales,
    compra de dominio (aparte) y cambios de alcance mayores."

### 6. Contacto y nota de pagos

Botón: "Escríbeme por WhatsApp" → https://wa.me/53XXXXXXXXX
Correo: (placeholder que el dueño completará)
Nota de pagos: "Acepto pagos en USD vía Transfermóvil (Tarjeta Clásica), efectivo,
o directamente en el exterior si te encuentras fuera de Cuba (PayPal/PYUSD vía
QvaPay, transferencia bancaria internacional, recarga de Tarjeta Clásica con
Tocopay). 50% de anticipo para reservar el turno y 50% contra entrega."

## Convenciones de código

- HTML semántico: header, main, section, article, footer. Un solo h1 por página.
  Atributos alt descriptivos en todas las imágenes.
- CSS con variables en :root para colores y espaciados. Sin !important.
  Clases en kebab-case (ej.: paquete-card, hero-titulo).
- JavaScript en un solo archivo js/main.js, sin dependencias externas.
  Usa const/let, funciones pequeñas y comentarios solo cuando aporten.
- Enlaces externos con rel="noopener" cuando abran en pestaña nueva.
- Formulario: si no hay backend, usa WhatsApp o un servicio estático;
  nunca inventes un endpoint.

## Flujo de trabajo esperado

- Antes de escribir código, propón un plan breve de archivos y cambios.
- Trabaja en bloques pequeños: un archivo o una sección por iteración.
- Después de cada bloque, explica qué hiciste y qué debo revisar.
- No generes código que no puedas explicar; si usas una técnica nueva,
  documéntala en el README.
- Si algo del alcance no está claro, pregunta antes de asumir.

## Criterios de aceptación

- [ ] El sitio se ve bien en 360px, 768px y 1280px.
- [ ] Todas las imágenes están comprimidas y tienen alt.
- [ ] Los botones de WhatsApp abren con el mensaje prellenado correcto.
- [ ] La página carga en menos de 2 segundos en conexión lenta simulada.
- [ ] No hay errores en la consola del navegador.
- [ ] El README explica cómo publicar el sitio y cómo editarlo.
- [ ] Las 6 secciones y los 10 FAQ están presentes con el texto exacto.
