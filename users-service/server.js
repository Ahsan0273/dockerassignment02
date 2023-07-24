// imports
const express = require("express");
const morgan = require("morgan");
const { sendMessage } = require("./lib/rmq");
WEBHOOK_QUEUE_NAME = 'webhook'
// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! USERS CRUD OPERATIONS
app.get("/users", (req, res) => {
  res.send("GET USERS");
});

app.post("/users", (req, res) => {
  res.send("POST USERS");
  sendMessage(WEBHOOK_QUEUE_NAME, req.body)
  res.send("Message send");
});

app.put("/users", (req, res) => {
  res.send("PUT USERS");
});

app.delete("/users", (req, res) => {
  res.send("DELETE USERS");
});

app.listen(3003);
