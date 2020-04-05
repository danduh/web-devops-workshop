#########################################################
# Docekr image                                          #
# karmat              #
#########################################################
FROM ubuntu:latest
MAINTAINER Daniel Ostrovsky

RUN apt update -y && \
    apt install ca-certificates \
      git-core \
      gconf-service \
      libasound2 \
      libatk1.0-0 \
      libatk1.0-0 \
      libdbus-1-3 \
      libgconf-2-4 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libx11-xcb1 \
      libxss1 \
      libxtst6 \
      fonts-liberation \
      libappindicator3-1 \
      xdg-utils \
      lsb-release \
      wget \
      curl \
      gnupg2 \
      zip \
      software-properties-common \
      unzip \
      xz-utils -y --no-install-recommends && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome-stable_current_amd64.deb && \
    apt-get install -f && \
    apt-get clean autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* google-chrome-unstable_current_amd64.deb

RUN apt update -y && \
     add-apt-repository 'deb http://archive.ubuntu.com/ubuntu/ bionic universe' && \
     apt update -y && \
     apt install xvfb -y



RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN apt update -y

ENV NODE_VERSION=12.14.0

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
  && rm "node-v$NODE_VERSION-linux-x64.tar.xz" \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs

WORKDIR /myapp

COPY package.json .
RUN npm i
COPY . .

CMD npm run test:karma
