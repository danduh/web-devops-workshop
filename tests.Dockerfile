FROM node:10

WORKDIR /myapp

COPY package.json .

RUN npm i --no-audit

CMD npm test
