FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY src ./src
COPY public ./public
COPY .env.example ./
COPY Procfile ./
COPY README.md ./

RUN test -f /app/src/server.js

ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "start"]
