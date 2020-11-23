FROM node:lts-alpine

WORKDIR /src
COPY package*.json ./

RUN npm install
COPY . /app

CMD npm run start
EXPOSE 3010