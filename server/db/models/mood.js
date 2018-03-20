const Sequelize = require('sequelize')
const db = require('../db')

const giphy = require('giphy-api')('h2eVXfaZ7LbgsC9Xt8313wsWJMp4uebj');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  username: "012f55f2-2f8e-45ca-9ef8-ce03aeb19d72",
  password: "JQsnPtXKd4RX",
  version: '2017-09-21',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});

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