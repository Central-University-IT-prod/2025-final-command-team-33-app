# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY ./frontend .
RUN npm install --frozen-lockfile

# Копируем весь проект и собираем билд
RUN npm run build

# Stage 2: Production (Nginx)
FROM nginx:latest
# Копируем билд фронта в папку, откуда Nginx будет раздавать файлы
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем свой конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
