FROM node:12-alpine as build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn; yarn build

FROM caddy:2-alpine

ENV LISTEN_PORT=80

COPY --from=build /usr/src/app/build/ /srv
COPY docker/Caddyfile /etc/caddy/Caddyfile
