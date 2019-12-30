FROM node:10

WORKDIR apps

COPY package.json .

RUN npm i

COPY src .

CMD node server.js
