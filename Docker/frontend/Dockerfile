# build stage
FROM node:22 as build-stage

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod


