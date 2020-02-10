const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
const db = require("./app/models/index");

//db.sequelize.sync();
// // drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
console.log("Drop and re-sync db.");
});

// Home page route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to REST API." });
});

// Include the routes defined in app/routes/article.routes.js
require("./app/routes/article.routes.js")(app);

// Server connection
const port = process.env.PORT||8080;
app.listen(port, () => console.log(`Express API listening on port ${port}`));
