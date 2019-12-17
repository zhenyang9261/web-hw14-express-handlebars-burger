var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Read all rows
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});

// Create a new row
router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID
    res.json({ id: result.insertId });
  });
});

// Update a row
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Delete a row
router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
