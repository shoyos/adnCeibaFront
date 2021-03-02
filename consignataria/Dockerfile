# Stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
EXPOSE 80
EXPOSE 8080
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/consignataria /usr/share/nginx/html