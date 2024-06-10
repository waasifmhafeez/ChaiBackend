require("dotenv").config();
console.log(process.env);
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Waasif..");
});

app.get("/twitter", (req, res) => {
  res.send("waasifhafeezdotcom...");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login at Chai or Code </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai or Code...</h2>");
});

// app.listen(port, () => {
//     console.log(`Listeng app on port : ${port}`);
// });
app.listen(process.env.Port, () => {
  console.log(`Listeng app on port : ${port}`);
});

//check its new commit
