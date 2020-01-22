FROM node:12

WORKDIR apps

COPY package.json .

RUN npm i

COPY . .

RUN npm run build



