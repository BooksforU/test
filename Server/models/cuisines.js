const db = require('../database')

const Sequelize = require("sequelize")
recipesTable = require('../models/recipes')

let cuisinesTable = db.define("cuisines",{
    name:{
        type:Sequelize.STRING,
        
    }
},{
    timestamps:false
})



module.exports = cuisinesTable