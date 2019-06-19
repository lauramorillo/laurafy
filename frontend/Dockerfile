FROM node:12

WORKDIR /home/node/app

ADD package.json yarn.lock /code/

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]
