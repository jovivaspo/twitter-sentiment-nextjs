FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 8000

USER node

CMD ["npm", "start"]



