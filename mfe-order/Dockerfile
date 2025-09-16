# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Angular build outputs to dist/<project-name>/browser by default
RUN npm run build

# Serve stage
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
# Copy only the browser build output
COPY --from=builder /app/dist/mfe-order/browser ./dist
EXPOSE 5002
CMD ["serve", "-s", "dist", "-l", "5002"]
