FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY prisma/schema.prisma prisma/

RUN yarn prisma generate

COPY . .

EXPOSE 8080

CMD ["node", "src/index.js"]