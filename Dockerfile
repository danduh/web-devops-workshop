FROM node:12

COPY package.json .

RUN npm i

COPY . .

RUN npm build


