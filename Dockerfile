
FROM node:latest

RUN apt-get update

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# wkhtmltoimage
# RUN wget http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz && \
#     tar xf wkhtmltox-0.12.3_linux-generic-amd64.tar.xz

# PhantomJS
RUN \
  cd /tmp && \
  git clone https://github.com/edwinvdgraaf/phantomjs-build.git && \
  cd phantomjs-build && \
  cp bin/phantomjs /usr/local/bin/ && \
  cd /tmp && \
  rm -rf /tmp/phantomjs-build

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

