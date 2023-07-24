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
  res.send("Hello World");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
  console.log(req.body);
  res.send("POST SHIPPING");
  sendMessage(WEBHOOK_QUEUE_NAME, req.body);
  res.send("Message send");
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

app.listen(3002, ()=>{
  console.log("running on 3002")
});
