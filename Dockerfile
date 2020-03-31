FROM node:10 AS builder

WORKDIR /myapp

COPY package.json .

RUN npm i --no-audit

COPY . .

ARG CONFIG=develop
RUN npm run build -- --configuration=$CONFIG

####################
FROM nginx

RUN mkdir -p /run/nginx

COPY --from=builder /myapp/dist/apps/art-catalogue /usr/share/nginx/html

COPY --from=builder /myapp/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


