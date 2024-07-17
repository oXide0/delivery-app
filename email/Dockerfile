FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]

ENV NODE_ENV production
ENV EMAIL nazar10fantom@gmail.com
ENV PASSWORD pbgh cogt qzmx cyji
ENV PORT 5000
ENV CLIENT_URL http://localhost:8080