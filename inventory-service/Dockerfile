FROM node:16
WORKDIR /app
COPY ./inventory-service/package* ./
COPY ../lib /app/lib
RUN npm install
COPY ./inventory-service/ .
EXPOSE 3001
CMD [ "npm","start" ]