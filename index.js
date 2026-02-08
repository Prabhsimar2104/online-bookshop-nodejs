const express = require("express");
const bodyParser = require("body-parser");

const generalRoutes = require("./routes/general");
const registeredRoutes = require("./routes/registered");

const app = express();
app.use(bodyParser.json());

app.use("/general", generalRoutes);
app.use("/registered", registeredRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});