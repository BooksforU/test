const express = require('express')
const router = express.Router()
const cloudinary = require('cloudinary').v2
const multiparty = require('multiparty')
const recipeTable = require('../models/recipeTable')

router.get('/', async (req, res) => {
    try {
        let allRecipies = await recipeTable.findAll()
        res.send(allRecipies)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let recipe = await recipeTable.create({
            recipeName: req.body.recipeName, 
            ingredients: req.body.ingredients.split(','),
            instructions: req.body.instructions,
            imageURL: req.body.imageURL,
            CuisineId : req.body.CuisineId
        })
        res.send(recipe)
    }
    catch (error) {
        console.log(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        let newRecipe = await recipeTable.update({
            recipeName: req.body.recipeName,
            ingredients: req.body.ingredients.split(','),
            instructions: req.body.instructions,
            imageURL: req.body.imageURL,
            CuisineId: req.body.CuisineId
        },
            { where: { id: req.params.id } })
        res.send(newRecipe)
    }
    catch (error) {
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await recipeTable.destroy({ where: { id: req.params.id } })
        res.send('Deleted')
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/pictures', async (req, res) => {
    var form = new multiparty.Form({})
    form.parse(req, function(err, fields, files){
        console.log(files)
        cloudinary.uploader.upload(files.image[0].path, function(err, result){
            res.send(result.url)
        })

    })
})


module.exports = router