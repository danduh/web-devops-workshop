## upall
FROM node:latest

RUN node -v

WORKDIR art-api

COPY package.json .

RUN npm install -g npm-check-updates

RUN ncu -u

RUN npm update

RUN npm i --no-audit

COPY . .

EXPOSE 3000

CMD npm run start:api
