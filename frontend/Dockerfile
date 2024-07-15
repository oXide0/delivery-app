FROM node:20.10.0

WORKDIR /app

RUN apt-get update && apt-get install -y xdg-utils

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

