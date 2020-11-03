## Motivation
This repo is intended to be used as a launching point for dockerised node.js apps running under https.

## Dependancies

* [docker](https://docs.docker.com/get-docker/)
* [mkcert](https://github.com/FiloSottile/mkcert)
* [npm](https://nodejs.org/en/download/)

## Set-up

1. Run `npm i`.
1. Run `mkcert -key-file ./docker/nginx/certs/key.pem -cert-file ./docker/nginx/certs/cert.pem localhost host.docker.internal`
1. Run `cp .env.sample .env` and update the `.env` file.
2. Run `mkcert localhost`.
4. Update `src` folder with your app code.
3. Run `docker-compose up`.





