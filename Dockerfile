FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY prisma/chema.prisma prisma/

RUN yarn prisma generate

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]