const express = require('express')
const router = express.Router()
const cuisineTable = require('../models/cuisineTable')
const recipeTable = require('../models/recipeTable')

router.get('/', async (req, res) => {
    try {
        let allCuisines = await cuisineTable.findAll({include : recipeTable})
        res.send(allCuisines)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let cuisine = await cuisineTable.create({
            cuisineName: req.body.cuisineName
        })
        res.send(cuisine)
    }
    catch(error){
        console.log(error)
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
        let newCuisine = await cuisineTable.update({
            cuisineName: req.body.cuisineName       
        },
        {where: {id: req.params.id}})
        res.send(newCuisine)
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await cuisineTable.destroy({where: {id: req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router
