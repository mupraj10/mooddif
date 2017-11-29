const Sequelize = require('sequelize')
const db = require('../db')

const giphy = require('giphy-api')('h2eVXfaZ7LbgsC9Xt8313wsWJMp4uebj');

const Mood = db.define('mood', {
  feeling: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gif: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  }, 
  score: {
    type: Sequelize.INTEGER
  }
})

Mood.beforeCreate((mood, options) => {
  return giphy.translate(mood.feeling).then(foundGif => {
    mood.gif = foundGif.data.images.original.url;
  });
});


module.exports = Mood;