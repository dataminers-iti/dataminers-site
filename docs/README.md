# Docs

## Visión

Una página que explique en un scroll qué hace Dataminers (PoCs, procesos con AI, PoC → producto), cómo trabaja, y
que convierta en un contacto con una idea concreta.

## Estado (v0.2.0)

- [x] Landing completa: hero, servicios, proceso, manifiesto, contacto, footer.
- [x] Tema claro/oscuro con preferencia del sistema y toggle persistido.
- [x] Formulario con validación en vivo, resumen accesible y envío configurable.
- [x] Fuentes self-hosted, sin CDN.
- [x] SEO: canonical, meta robots, Open Graph y Twitter Card, JSON-LD (`Organization`, `WebSite`), `robots.txt`, `sitemap.xml`, `llms.txt`. Dominio: `https://dataminers.lat`.

## Roadmap

- [ ] Destino real del formulario (`VITE_CONTACT_ENDPOINT` o `VITE_CONTACT_EMAIL`).
- [~] Dominio (`dataminers.lat`) y remoto en GitHub listos; falta pipeline de deploy (workflow + blue/green).
- [ ] Logo: hoy la marca es el wordmark en Dela Gothic One.
- [ ] Casos de estudio reales (estilo `longform`).
- [ ] Open Graph image (PNG/JPG 1200×630; las previews de redes no toman SVG).
