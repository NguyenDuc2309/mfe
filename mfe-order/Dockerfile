# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files trước để tận dụng cache
COPY package*.json ./

# Cài dependencies
RUN npm ci --legacy-peer-deps

# Copy toàn bộ source code
COPY . .

# Build Angular app (ra dist/mfe-order/)
RUN npm run build

# ---------- Serve stage ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Xóa default nginx content
RUN rm -rf ./*

# Copy build output từ builder
COPY --from=builder /app/dist/mfe-order ./

# Copy nginx config cho Angular SPA với Module Federation
RUN rm /etc/nginx/conf.d/default.conf \
 && echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
      try_files $uri $uri/ /index.html; \
    } \
    location /remoteEntry.js { \
      add_header Access-Control-Allow-Origin *; \
      try_files $uri =404; \
    } \
    location /health { \
      access_log off; \
      return 200 "healthy\n"; \
      add_header Content-Type text/plain; \
    } \
 }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]