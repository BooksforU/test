const express = require("express")
const router = express.Router()

const cuisineTable = require("../models/cuisines")
const recipeTable = require("../models/recipes")

//crud for employee

// Create employee
router.post("/",async(req,res)=>{
    try {
        
        const {body} =req
        let cuisine = await cuisineTable.create(
            {
                name:body.name,
            }
        )

        res.send(cuisine)
        
    } catch (error) {
            console.log(error)       
    }
})


//edit Employee

router.put("/edit/:id",async(req,res)=>{
    try {
        const { body,params } = req
        let cuisine = await cuisineTable.update({name:body.name,departmentName:body.department},{
            where : { id : params.id }});
            res.send(cuisine)
        } catch (error) {
            console.log(error)
        }
    } )

//delete employee


router.delete('/delete/:id',async(req,res)=>{
    try {
        const {params} = req
        await cuisineTable.distroy({
            where : {
                id:params.id
            }
        })
        res.send("successful deleted employee")
    } catch (error) {
        console.log(error)
    }
})


//get employee by name , department , all

router.get('/all',async(req,res)=>{
    try {
        
        let cuisine = await cuisineTable.findAll();
        res.send(cuisine)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;