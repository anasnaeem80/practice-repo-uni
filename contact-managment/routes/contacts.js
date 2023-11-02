const express = require("express");

const router = express.Router();

//@route GET api/contacts
//@describe get all contacts
//@access PRIVATE

router.get("/", (req, res) => {
  res.send("add a new contact");
});

//@route PUT api/contacs/:id
//@describe edit a contact
//@access PRIVATE

router.put("/:id", (req, res) => {
  res.send("edit a contact");
});

//@route DELETE api/contacs/:id
//@describe delete a contact
//@access PRIVATE

router.delete("/:id", (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
