## Motivation
This repo is intended to be used as a launching point for dockerised node.js apps running under https, providing encryption to the box.

## Concept
In the local environment nginx mimics a load blancer, it loads a valid SSL certificate and terminates the trusted SSL connection. However, requests can still retain encrypted all the way to the app box as the app container generates a self-signed certificated to faciliated an untrusted but encrypted connection between load balancer and app. This removes the need to distribute SSL certs to individual app instances, but allows for an e2e encrypted connection.

## Dependancies

* [docker](https://docs.docker.com/get-docker/)
* [mkcert](https://github.com/FiloSottile/mkcert)
* [npm](https://nodejs.org/en/download/)

## Set-up

1. Run `npm i`.
2. Run `mkcert -key-file ./docker/nginx/certs/key.pem -cert-file ./docker/nginx/certs/cert.pem localhost host.docker.internal`
3. Run `cp .env.sample .env` and update the `.env` file.
4. Update `src` folder with your app code.
5. Run `docker-compose up`.
6. App will now be available at https://localhost and https://localhost:8080.





