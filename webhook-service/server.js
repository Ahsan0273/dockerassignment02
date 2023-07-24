const express = require("express");
const morgan = require("morgan");
const amqp = require("amqplib");

const { receiveMessage } = require("./lib/rmq");

const WEBHOOK_QUEUE_NAME = "webhook";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

receiveMessage(WEBHOOK_QUEUE_NAME);

app.listen(3005, () => {
    console.log("Listing to port 3005");
})