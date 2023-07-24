FROM node:16
WORKDIR /app
COPY ./billing-service/package* ./
COPY ../lib /app/lib
RUN npm install
COPY ./billing-service/ .
EXPOSE 3004
CMD [ "npm","start" ]