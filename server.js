const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Home page route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to REST API." });
});

// Include the routes defined in app/routes/customer.routes.js
require("./app/routes/customer.routes.js")(app);

// Server connection
const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Express API listening on port ${port}`));
