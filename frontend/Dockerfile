FROM node:20 as build

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
RUN apk update && apk upgrade

COPY --from=build /app/dist /usr/share/nginx/html
