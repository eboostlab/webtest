# Multi-stage: build Vite React app, serve with Nginx
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY . .
# Build (Vite outputs to /dist)
RUN npm run build

FROM nginx:1.27-alpine
# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html
# Replace default vhost with SPA-friendly config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-spa.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3       CMD wget -q --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
