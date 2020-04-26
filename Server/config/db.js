
const seql = require('sequelize')

const db = new seql('api','postgres','arvind',{
    host:'localhost',
    dialect:'postgres'
})

db.sync({

} )

module.exports= db;