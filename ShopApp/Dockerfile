FROM node:16-alpine
WORKDIR /app

COPY . .

RUN npm install

RUN npx blitz build

CMD npx blitz start 