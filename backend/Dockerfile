FROM node:12

WORKDIR /home/node/app

RUN yarn global add nodemon
ADD package.json yarn.lock /code/

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 3000

ADD aws_credentials /home/node/.aws/credentials

USER node
CMD ["npm", "start"]
