# Sitio de Presentación y Venta de Servicios Web (Cuba)

Sitio web estático, ultra ligero y optimizado para la realidad de conectividad en Cuba. Desarrollado con HTML5 semántico puro, CSS moderno mobile-first y JavaScript mínimo de mejora progresiva sin dependencias externas.

---

## ⚡ Métricas de Rendimiento y Peso

- **Peso total del sitio (código + imágenes):** ~70 KB (límite máximo permitido: 500 KB).
- **Imágenes demo:** En formato WebP optimizado (< 9 KB cada una).
- **Dependencias externas:** 0 (sin fuentes externas pesadas, sin librerías ni frameworks).
- **Carga estimada:** Menos de 1 segundo incluso bajo conexiones 3G lentas.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html          # Estructura semántica completa con las 6 secciones requeridas
├── css/
│   └── styles.css      # Sistema de diseño, variables :root y media queries mobile-first
├── js/
│   └── main.js         # Menú hamburguesa accesible y comportamiento coordinado de FAQ
├── img/
│   ├── demo-1.webp     # Mockup de muestra: Hostal Colonial Havana (8.2 KB)
│   ├── demo-2.webp     # Mockup de muestra: Café & Bistro El Malecón (7.7 KB)
│   └── demo-3.webp     # Mockup de muestra: AutoServicio Taller (7.6 KB)
├── AGENTS.md           # Especificaciones del proyecto y reglas de negocio
└── README.md           # Guía de edición, personalización y despliegue
```

---

## ✏️ Guía de Personalización

Antes de publicar el sitio, realiza los siguientes cambios en `index.html`:

### 1. Reemplazar el número de WhatsApp
Busca en `index.html` la cadena:
```text
53XXXXXXXXX
```
Y reemplázala por tu número de teléfono real de WhatsApp (con código de país 53, por ejemplo `5351234567`).

Aparece en:
1. Botón Hero: `href="https://wa.me/53XXXXXXXXX?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20un%20sitio%20web"`
2. Paquete 1: `href="https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Presencia%20Esencial"`
3. Paquete 2: `href="https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Sitio%20Profesional"`
4. Paquete 3: `href="https://wa.me/53XXXXXXXXX?text=Hola,%20me%20interesa%20el%20paquete%20Tienda%20con%20pedidos"`
5. Sección Contacto: `href="https://wa.me/53XXXXXXXXX"`

### 2. Configurar el correo de contacto
Busca `tu-correo@ejemplo.com` en `index.html` y reemplázalo por tu correo electrónico real.

### 3. Modificar o agregar proyectos reales
En la sección `<section id="trabajos">`, puedes sustituir las imágenes en `img/` y actualizar los títulos y descripciones conforme vayas completando proyectos con clientes reales.

---

## 🚀 Despliegue Gratuito en Cloudflare Pages

El sitio está listo para alojarse de forma 100% gratuita y ultrarrápida en **Cloudflare Pages**.

### Método A — Conectar con GitHub (Recomendado)
1. Sube este repositorio a tu cuenta de [GitHub](https://github.com/).
2. Inicia sesión en [Cloudflare Dashboard](https://dash.cloudflare.com/) y ve a **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona tu repositorio.
4. En **Build settings**:
   - **Framework preset:** None
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `/` *(o dejar la raíz del repositorio)*
5. Haz clic en **Save and Deploy**. En pocos segundos tendrás una URL `.pages.dev` con HTTPS gratuito y CDN global con caché local en Cuba/Caribe.

### Método B — Subida directa (Direct Upload)
1. Ve a **Workers & Pages** > **Pages** > **Upload assets**.
2. Arrastra la carpeta del proyecto completa (asegúrate de que `index.html` quede en la raíz).
3. Haz clic en **Deploy site**.

---

## 🛠️ Pruebas Locales

Para probar el sitio en tu máquina:
- Puedes abrir `index.html` directamente en tu navegador web.
- O iniciar un servidor estático ligero con Python:
  ```bash
  python -m http.server 8000
  ```
  Y abrir `http://localhost:8000` en tu navegador.
