# RX Web Studio

Sitio web estático de presentación de servicios de diseño y desarrollo web. Está construido con HTML, CSS y JavaScript, sin dependencias de frameworks ni proceso de compilación.

## Tecnologías

- HTML5 semántico.
- CSS moderno con diseño responsive.
- JavaScript nativo para interacciones de la interfaz.
- Imágenes WebP locales.

## Estructura principal

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   ├── hostal-la-estancia.webp
│   └── ramirox-market.webp
└── README.md
```

La sección de proyectos incluye enlaces a seis trabajos publicados. Algunas tarjetas utilizan recursos gráficos creados con CSS; no son capturas de pantalla de los sitios enlazados. Los recursos de demostraciones anteriores que aún permanezcan en el repositorio no forman parte del portafolio actual.

## Datos de contacto

Los enlaces de contacto del sitio están configurados con el WhatsApp y el correo vigentes del propietario. Para actualizarlos, edita los enlaces `wa.me` y `mailto:` en `index.html`.

## Edición y pruebas locales

No se necesita instalar dependencias ni ejecutar un comando de build. Puedes abrir `index.html` en el navegador o iniciar un servidor local desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

Antes de publicar cambios, comprueba:
- La navegación y el menú en móvil.
- La visualización de las seis tarjetas del portafolio.
- Los enlaces de cada proyecto, WhatsApp, correo y LinkedIn.
- La carga de las imágenes locales y la consola del navegador.

## Publicación

El sitio se sirve actualmente desde un Cloudflare Worker. Los cambios deben probarse primero en una vista previa o entorno separado y verificarse antes de actualizar el Worker público. No se debe asumir que el flujo de despliegue de Cloudflare Pages aplica a este proyecto.

La publicación en producción debe realizarse únicamente después de revisar la vista móvil y escritorio y aprobar expresamente los cambios.
