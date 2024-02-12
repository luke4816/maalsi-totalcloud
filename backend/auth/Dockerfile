FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --omit=dev --no-cache

COPY . .

EXPOSE 9001
CMD ["npm", "start"]