const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

const facts = path.join(__dirname, "facts.json");

app.get("/facts", function (req, res) {
  fs.readFile(facts, "utf8", (err, data) => {
    if (err) {
      res.send({
        status: "Error occurred",
        message: err.message,
      });
    } else {
      const allfactsObject = JSON.parse(data);

      res.send(allfactsObject);
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
