FROM node:12

RUN apt-get update; \
    apt-get install nginx -y

WORKDIR myapp

COPY package.json .

RUN npm i --no-audit

COPY . .

RUN npm run build


