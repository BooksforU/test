const db = require('../config/db')
const Seq = require('sequelize')
let userTable = db.define('user', {
    userName : {
        type: Seq.STRING
    }
},
{timestamps : false}
)




module.exports = userTable