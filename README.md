# Numen Medical Clinic — Web pre-lanzamiento

Página pre-lanzamiento diseñada según el Manual de Identidad Visual de Numen v2.

## Estructura

```
numen/
├── index.html
├── css/
│   ├── reset.css        Normalización
│   ├── fonts.css        @font-face para Bebas Neue + Montserrat
│   ├── variables.css    Tokens de diseño (colores, tipografía, espaciados)
│   ├── base.css         Estilos base, botones, utilidades
│   ├── nav.css          Navegación fija
│   ├── hero.css         Sección portada
│   ├── about.css        Sección "Quiénes somos"
│   ├── raffle.css       Sección sorteo / formulario
│   ├── treatments.css   Sección tratamientos
│   ├── booking.css      Sección "Agenda tu cita"
│   ├── footer.css       Footer
│   └── responsive.css   Media queries
├── js/
│   └── main.js          Nav scroll, reveal animations, formulario
├── fonts/
│   ├── BebasNeue/       → Coloca aquí BebasNeue-Regular.woff2 + .woff
│   └── Montserrat/      → Coloca aquí los .woff2 de cada peso
└── img/
    └── logos/           → Tus logos ya van aquí
```

## Pasos para usarlo en local

1. **Coloca tus logos** en `img/logos/`:
   - `LogonegroFondoTransparente.png` (nav + footer)
   - `cortoN.png` (isotipo en sección "Quiénes somos")

2. **Coloca tus fuentes** en las carpetas correspondientes:
   - `fonts/BebasNeue/BebasNeue-Regular.woff2`
   - `fonts/Montserrat/Montserrat-Light.woff2`
   - `fonts/Montserrat/Montserrat-Regular.woff2`
   - `fonts/Montserrat/Montserrat-Medium.woff2`
   - `fonts/Montserrat/Montserrat-SemiBold.woff2`
   > Si no tienes woff2, renombra los .ttf a .woff2 (no es lo ideal) o usa
   > la variante de Google Fonts que ya está como fallback en el `<head>`.

3. **Abre `index.html`** en un navegador. Para evitar problemas de CORS
   con las fuentes locales, usa un servidor local:
   ```bash
   # Con Python
   python3 -m http.server 8080
   # Con Node
   npx serve .
   ```
   Luego ve a `http://localhost:8080`

## Personalización rápida

Todo el sistema de color está en `css/variables.css`.
Para cambiar algo de la paleta edita solo ese archivo.

## Conectar el formulario

El formulario en `index.html#sorteo` ahora simula el envío con un timeout.
Para enviarlo de verdad conecta un servicio como:
- **Formspree**: cambia `action` del form por tu URL de Formspree
- **EmailJS**: integra su SDK en `js/main.js`
- **Tu propio backend**: cambia el `setTimeout` por un `fetch` a tu API

## Paleta de color (Manual de Identidad v2)

| Nombre     | Hex       | Uso               |
|------------|-----------|-------------------|
| Negro      | `#000000` | Fondos principales|
| Blanco     | `#FFFFFF` | Fondos claros     |
| Vino/Numen | `#491620` | Acento de marca   |
| Gris cálido| `#D7D0CA` | Secciones neutras |
