FROM alpine:3.12 as base
RUN apk update \
    && apk upgrade \
    && apk add nodejs=12.18.3-r0 npm=12.18.3-r0 openssl=1.1.1g-r0
WORKDIR /app

FROM base as build
# ARG NPM_TOKEN
# ENV NPM_TOKEN=${NPM_TOKEN}
COPY ./src /app
RUN npm ci && npm run build

FROM base as run
COPY --from=build /app /app
CMD openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
        -subj "/C=AU/O=app" \
        -keyout ssl.key -out ssl.cert \
    && npm start 