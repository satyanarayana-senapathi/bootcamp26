FROM node:18-alpine

WORKDIR /json

COPY data.json .

RUN npm install -g json-server

EXPOSE 3001

CMD ["json-server", "--watch", "data.json", "--port", "3001","--host", "0.0.0.0"]