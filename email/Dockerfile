ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production
ENV EMAIL nazar10fantom@gmail.com
ENV PASSWORD pbgh cogt qzmx cyji
ENV PORT 5000
ENV CLIENT_URL http://localhost:8080


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD npm start
