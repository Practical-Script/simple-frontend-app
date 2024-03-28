FROM node:20-alpine AS builder
WORKDIR /app
COPY public/ ./public
COPY src/ ./src
COPY package*.json tsconfig.json tsconfig.node.json index.html ./
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf