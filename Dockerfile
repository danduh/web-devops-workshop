FROM node:10

COPY package.json .

RUN npm i

COPY src public

CMD node public/server.js
