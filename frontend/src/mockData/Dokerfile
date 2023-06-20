FROM node:18-alpine

WORKDIR /json

COPY db.json .

RUN npm install -g json-server

EXPOSE 3001

CMD ["json-server", "--watch", "db.json", "--port", "3001"]