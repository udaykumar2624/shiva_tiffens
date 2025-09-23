
FROM node:slim

WORKDIR /app

COPY package*.json ./
RUN npm install 

RUN  npm install @google/generative-ai -y

COPY . .

CMD [ "npm", "start"]

EXPOSE 3000
