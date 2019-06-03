FROM node:12

WORKDIR /home/node/app

COPY package*.json ./

RUN mkdir build
RUN touch build/routes.ts

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
