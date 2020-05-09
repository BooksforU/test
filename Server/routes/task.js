const express = require('express')
const router = express.Router()

const taskTable = require('../models/task')

router.get('/', async (req, res) => {
    try {
        let alltask = await taskTable.findAll()
        res.send(alltask)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let task = await taskTable.create({
            taskName: req.body.taskName, 
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            startTime: req.body.startDate,
            endTime: req.body.endDate,
            link: req.body.link,
            userId : req.body.userId
        })
        res.send(task)
    }
    catch (error) {
        console.log(error)
    }
})

// router.put('/update/:id', async (req, res) => {
//     try {
//         let newRecipe = await recipeTable.update({
//             recipeName: req.body.recipeName,
//             ingredients: req.body.ingredients.split(','),
//             instructions: req.body.instructions,
//             imageURL: req.body.imageURL,
//             CuisineId: req.body.CuisineId
//         },
//             { where: { id: req.params.id } })
//         res.send(newRecipe)
//     }
//     catch (error) {
//         console.log(error)
//     }
// })

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         await recipeTable.destroy({ where: { id: req.params.id } })
//         res.send('Deleted')
//     }
//     catch (error) {
//         console.log(error)
//     }
// })

// router.post('/pictures', async (req, res) => {
//     var form = new multiparty.Form({})
//     form.parse(req, function(err, fields, files){
//         console.log(files)
//         cloudinary.uploader.upload(files.image[0].path, function(err, result){
//             res.send(result.url)
//         })

//     })
// })


module.exports = router