FROM node:16

WORKDIR /usr/src

COPY package*.json .

RUN yarn install

COPY prisma/schema.prisma prisma/

RUN yarn prisma generate

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]