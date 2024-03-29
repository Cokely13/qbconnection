const Sequelize = require('sequelize')
const db = require('../db')


const Quarterback = db.define('quarterback', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagePath: {
    type: Sequelize.STRING,
    defaultValue: "/Generic.png"
  },
});


module.exports = Quarterback
