# Despliegue de SPA (Vite React) con Docker + Portainer

## Requisitos previos
- En el repo debe compilar a `dist/` con `npm run build` (Vite por defecto).
- Asegúrate de que `package.json` es válido (ver nota de corrección más abajo).

## Estructura recomendada
Coloca estos tres archivos en una carpeta `deploy/` dentro del repo:
- `deploy/Dockerfile`
- `deploy/docker-compose.yml`
- `deploy/nginx-spa.conf`

## Portainer (Stack → Web editor)
1) Copia el contenido de `docker-compose.yml` en el editor.
2) Si usas un repositorio Git, en **Compose path** indica `deploy/docker-compose.yml`.
3) Deploy.

## Build local (opcional)
```bash
docker compose -f deploy/docker-compose.yml build
docker compose -f deploy/docker-compose.yml up -d
```
Accede a `http://localhost:8080`.

## Nota de corrección para este repo
- `package.json` contiene un error de coma en `scripts` (falta una coma antes de `"start"`). Si es una SPA servida por Nginx, no necesitas `start`. Deja:
  ```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
  ```
- El `nginx.conf` original tenía `...` (no válido). Sustituido por `nginx-spa.conf` de este paquete.
- Usa `npm ci` si existe `package-lock.json` para builds reproducibles.
