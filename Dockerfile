FROM node:alpine AS base

RUN apk update
RUN apk upgrade
RUN apk add bash g++ make python git

WORKDIR /usr/src/batch-explorer

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
EXPOSE 443

CMD ["npm", "run", "start:prod"]
