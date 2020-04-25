const db = require("../database")
const Sequelize = require("sequelize")
cuisinesTable = require('../models/cuisines')
let recipesTable = db.define("recipes", {
  name:{
      type: Sequelize.STRING,
      
  },
  ingredients :{
    type: Sequelize.STRING,
    
  },
  
  instructions :{
    type:Sequelize.STRING
  },
  
  image:{
    type:Sequelize.STRING
  }
},{
    timestamps: false
})

cuisinesTable.hasMany(recipesTable)
recipesTable.belongsTo(cuisinesTable)


module.exports = recipesTable