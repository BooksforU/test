const db = require('../config/db')
const Seq = require('sequelize')
let cuisineTable = db.define('cuisine', {
    cuisineName : {
        type: Seq.STRING
    }
},
{timestamps : false}
)




module.exports = cuisineTable