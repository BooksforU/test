const express = require('express')
const router = express.Router()
const taskTable = require('../models/task')

router.get('/:date', async (req, res) => {
    try {
        let allTasks = await taskTable.findAll({where: {date: req.params.date}})
        res.send(allTasks)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let task = await taskTable.create({
            info: req.body.info,
            link: req.body.link,
            people: req.body.people,
            date: req.body.date,
            time: req.body.time,
            title: req.body.title
        })
        res.send(task)
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router