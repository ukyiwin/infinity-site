FROM node:9.10-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
