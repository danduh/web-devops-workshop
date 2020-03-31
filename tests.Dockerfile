FROM node:10

WORKDIR /myapp

COPY package.json .

RUN npm i --no-audit

EXPOSE 4200

CMD npm test
