const db = require('../config/db')
const Seq = require('sequelize')
const cuisine = require('./cuisineTable')

let recipeTable = db.define('recipe', {
    recipeName : {
        type: Seq.STRING,
    },
    ingredients : {
        type: Seq.ARRAY({type: Seq.STRING})
    },
    instructions : {
        type: Seq.STRING
    },
    imageURL : {
        type: Seq.STRING
    }
}, {timestamps : false}
)

recipeTable.belongsTo(cuisine, {foreignKey : "CuisineId", targertKey : "id"})
cuisine.hasMany(recipeTable, {foreignKey : "CuisineId", sourceKey: "id"})

module.exports = recipeTable