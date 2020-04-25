

const express = require("express")
const multer = require('multer');
const fs = require('fs');


const router = express.Router()
const app = express()
const upload = multer({ dest: '/tmp/'});

const recipesTable = require("../models/recipes")




//Insert a Department
router.post("/", async(req,res)=>{

        try {
    
            const { body } = req
            console.log(body)
            let recipe = await recipesTable.create({name:req.body.name,ingredients:req.body.ingredients,instructions:req.body.instructions,cuisineId:req.body.cuisineId})
            
            res.send(recipe)
        } catch (error) {
            console.log(error)
        }
   


})


//Edit a Department 
router.put("/edit/:id", async(req,res)=>{
    try {
        const { body,params } = req
        let recipe = await recipesTable.update({name:body.name},{
            where : { id : params.id }});
            res.send(recipe)
        } catch (error) {
            console.log(error)
        }
    } )
    

    //Delete a Department
    router.delete("/delete/:id", async(req,res)=>{
        try {
            const { params } = req
            await recipesTable.destroy({where : {id : params.id}})
            res.send("department deleted")
        } catch (error) {
            console.log(error)
        }
    } )
    
    
    //Find All Department
    router.get("/all",async(req,res)=>{
        try {
            let recipe = await recipesTable.findAll();
            res.send(recipe)
        } catch (error) {
            console.log(error)
        }
    })


    // 



module.exports = router;