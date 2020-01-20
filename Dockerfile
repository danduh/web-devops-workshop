FROM nginx

RUN apt-get update; \
    apt-get install curl nano -y

RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/

COPY dist/apps/art-catalogue /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
