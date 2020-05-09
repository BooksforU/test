const db = require('../config/db')
const Seq = require('sequelize')

let taskTable = db.define('task', {
    info: {
        type: Seq.STRING
    },
    title: {
        type: Seq.STRING
    },
    link: {
        type: Seq.STRING
    },
    people: {
        type: Seq.ARRAY(Seq.STRING)
    },
    date: {
        type: Seq.STRING
    },
    time: {
        type: Seq.STRING
    }


}, {timestamps : false}
)



module.exports = taskTable