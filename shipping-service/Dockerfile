FROM node:16
WORKDIR /app
COPY ./shipping-service/package* ./
COPY ../lib /app/lib
RUN npm install
COPY ./shipping-service/ .
EXPOSE 3002
CMD [ "npm","start" ]