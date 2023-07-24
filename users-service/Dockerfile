FROM node:16
WORKDIR /app
COPY ./users-service/package* ./
COPY ../lib /app/lib
RUN npm install
COPY ./users-service/ .
EXPOSE 3003
CMD [ "npm","start" ]