FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:latest
COPY --from=node /app/dist/supermarketbnex /usr/share/nginx/html
EXPOSE 80