FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 9090

CMD ["node", "src/index.js"]