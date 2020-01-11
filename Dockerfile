FROM node:10

WORKDIR apps

COPY . .

RUN npm i

CMD node src/server.js
