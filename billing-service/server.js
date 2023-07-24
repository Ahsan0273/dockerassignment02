// imports
const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const { sendMessage } = require("./lib/rmq");
// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

WEBHOOK_QUEUE_NAME = 'webhook'

app.get("/", (req, res) => {
  res.send("Hello World from inventory service");
});


app.post("/billing-service", (req, res) => {
    console.log('billing service')
    sendMessage(WEBHOOK_QUEUE_NAME, req.body);
    res.send("Message send");
});

app.listen(3004, () => {
    console.log("running on 3004")
});
