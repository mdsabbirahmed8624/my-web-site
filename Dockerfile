FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

COPY src ./src
COPY public ./public

RUN test -f /app/src/server.js

ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "start"]
