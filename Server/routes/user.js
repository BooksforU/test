const express = require('express')
const router = express.Router()
const userTable = require('../models/user')
const taskTable = require('../models/task')

router.get('/', async (req, res) => {
    try {
        let allUser = await userTable.findAll({include : taskTable})
        res.send(allUser)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let user1 = await userTable.create({
            userName: req.body.userName
        })
        res.send(user1)
    }
    catch(error){
        console.log(error)
    }
})

// router.put('/update/:id', async (req, res)=>{
//     try {
//         let newCuisine = await cuisineTable.update({
//             cuisineName: req.body.cuisineName       
//         },
//         {where: {id: req.params.id}})
//         res.send(newCuisine)
//     }
//     catch(error){
//         console.log(error)
//     }
// })

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         await cuisineTable.destroy({where: {id: req.params.id}})
//         res.send('Deleted')
//     }
//     catch(error){
//         console.log(error)
//     }
// })

module.exports = router
