# syntax=docker/dockerfile:1
# Multi-stage build: Build with Node, serve static with nginx
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
# Instala dependencias de forma reproducible
COPY package*.json ./
# Usa npm ci si tienes package-lock.json
RUN npm install
# Copia el resto del código y construye
COPY . .
RUN npm run build


# Stage final: nginx para servir los assets
FROM nginx:stable-alpine AS final
# Copiamos los assets generados por Vite (por defecto en /dist)
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos la configuración personalizada (archivo nginx.conf en la raíz)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Ajustamos permisos (opcional)
RUN addgroup -S app && adduser -S -G app app && chown -R app:app /usr/share/nginx/html
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
CMD wget -q --spider http://localhost/ || exit 1
EXPOSE 80
CMD ["/bin/sh","-c","/usr/sbin/nginx -g 'daemon off;'"]
