FROM node:12 AS builder

WORKDIR /myapp

COPY package.json .

RUN npm i

COPY . .

RUN npm run build


FROM nginx

RUN apt-get update; \
    apt-get install curl nano -y

RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/

COPY --from=builder /myapp/dist/apps/art-catalogue /usr/share/nginx/html

COPY --from=builder /myapp/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
