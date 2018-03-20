const router = require("express").Router();
const { Mood } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Mood.findAll()
    .then(moodList => res.json(moodList))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Mood.create(req.body)
  .then(mood => res.status(201).json(mood));
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Mood.findById(id)
    .then(foundMood => foundMood.destroy())
    .then(result => {
      res.send({ message: "Deleted Sucessfully" });
    })
    .catch(next);
});
