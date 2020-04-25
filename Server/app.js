const express = require('express')
const bodyParser = require('body-parser')
const app = express()
global.appRoot = __dirname;
swaggerUi = require('swagger-ui-dist')
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", require("./Routes/routes"))
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// categoryApi(app,db);

app.listen(5000,()=> console.log("Server started at 5000"))



