FROM alpine:3.12 as base
RUN apk update \
    && apk upgrade \
    && apk add nodejs npm openssl
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