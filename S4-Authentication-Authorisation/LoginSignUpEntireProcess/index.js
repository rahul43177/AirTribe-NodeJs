//$2b$10$XYcedamg0y.wf9FSEfZzL.4tafJOgZkIHEGxARwkFs.PvX9MSuQP.
const express = require("express");
const router = require("./router/router");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use("/" , router)

app.listen(3000, () => {
  console.log("The server is running on the PORT :", PORT);
});
