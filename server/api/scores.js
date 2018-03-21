const router = require("express").Router();
const { Mood } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Mood.findAll({attributes:['score', 'date']})
    .then(moodList => res.json(moodList))
    .catch(next);
});





