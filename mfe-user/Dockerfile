# ---------- Build Stage ----------
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Copy package files trước để tận dụng cache
    COPY package*.json ./
    
    # Cài deps (nếu có lock thì npm ci nhanh hơn npm install)
    RUN npm ci --legacy-peer-deps
    
    # Copy toàn bộ source
    COPY . .
    
    # Build React app
    RUN npm run build
    
    # ---------- Serve Stage ----------
    FROM nginx:alpine
    WORKDIR /usr/share/nginx/html
    
    # Xóa default nginx content
    RUN rm -rf ./*
    
    # Copy build output từ builder
    COPY --from=builder /app/dist ./
    
    # Copy nginx config tối ưu cho React SPA
    RUN rm /etc/nginx/conf.d/default.conf \
     && echo 'server { \
        listen 80; \
        server_name _; \
        root /usr/share/nginx/html; \
        index index.html; \
        location / { \
          try_files $uri /index.html; \
        } \
        location /health { \
          access_log off; \
          return 200 "healthy\n"; \
          add_header Content-Type text/plain; \
        } \
     }' > /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    