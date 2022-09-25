FROM node:18-alpine3.16 AS development

WORKDIR /usr/src/post

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine3.16 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/post

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]