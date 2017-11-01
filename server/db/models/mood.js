const Sequelize = require('sequelize')
const db = require('../db')

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
  }
})

module.exports = Mood;