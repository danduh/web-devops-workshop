FROM node:10

ENV PORT=5000

WORKDIR /myapp

COPY slim-package.json package.json

RUN npm i

COPY server server

CMD node server/server.js
