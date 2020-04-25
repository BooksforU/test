const Sequelize = require('sequelize')

const db = new Sequelize("assignmenttest","postgres","qwerty",{
    host:"localhost",
    dialect:"postgres",
    logging:false
})


db.authenticate()
.then(()=>{
    console.log("DB connected")

})

db.sync(
    {force:true}
)



module.exports = db