const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

let userTypes = [];

let users = [];

app.get("/userTypes", (req, res) => {
  res.send(userTypes);
});
app.get("/userTypes/:id", (req, res) => {
  const element = userTypes?.find((type) => type.id === req?.params?.id);
  res.send(element);
});

app.post("/userTypes", (req, res) => {
  const today = new Date();
  const newElement = { id: today.toISOString(), ...req.body };
  userTypes = [newElement, ...userTypes];
  res.send("UserType added successfully.");
});

app.patch("/userTypes/:id", (req, res) => {
  const userId = req.params?.id;
  const body = req.body;
  const newList = userTypes?.map((user) => {
    if (user.id === userId) return { ...user, ...body };
    return user;
  });
  userTypes = newList;
  res.send("User " + userId + " updated successfully.");
});

app.delete("/userTypes/:id", (req, res) => {
  const newList = userTypes?.filter((user) => user.id !== req?.params?.id);
  userTypes = newList;
  res.send(userTypes);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const today = new Date();
  const newElement = { id: today.toISOString(), ...req.body };
  users = [newElement, ...users];
  res.send("User added successfully.");
});

app.patch("/users/:id", (req, res) => {
  const userId = req.params?.id;
  const body = req.body;
  const newList = users?.map((user) => {
    if (user.id === userId) return { ...user, ...body };
    return user;
  });
  users = newList;
  res.send("User " + userId + " updated successfully.");
});

app.get("/users/:id", (req, res) => {
  const element = users?.find((user) => user.id === req?.params?.id);
  res.send(element);
});

app.delete("/users/:id", (req, res) => {
  const newList = users?.filter((user) => user.id !== req?.params?.id);
  users = newList;
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
