const express = require("express");
require("dotenv").config();

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listen to PORT ${PORT}`);
});
