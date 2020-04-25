const express = require("express")
const router = express.Router()


router.use("/api/recipes",require("./recipes"))
router.use("/api/cuisines",require("./cuisines"))

module.exports = router;