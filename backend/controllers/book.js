const Book = require("../models/books");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Book.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Book.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Book.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;