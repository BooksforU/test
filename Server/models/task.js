const db = require('../config/db')
const Seq = require('sequelize')
const user = require('./user')

let taskTable = db.define('task', {
    taskName : {
        type: Seq.STRING,
    },
    startDate : {
        type: Seq.STRING
    },
    endDate : {
        type: Seq.STRING
    },
    startTime : {
        type: Seq.STRING
    },
    endTime:{
        type: Seq.STRING
    },
    link:{
        type:Seq.STRING
    }

}, {timestamps : false}
)

taskTable.belongsTo(user, {foreignKey : "userId", targertKey : "id"})
user.hasMany(taskTable, {foreignKey : "userId", sourceKey: "id"})

module.exports = taskTable