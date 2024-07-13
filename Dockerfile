FROM node:alpine as build

ADD . /app
WORKDIR /app

RUN npm install
RUN node /app/src/generate.cjs
RUN npm run build:static

FROM nginx:stable
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
