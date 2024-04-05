const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes.js")
const apiRoutes = require("./notesRoute.js")
//html routes
router.use(htmlRoutes)
//api routes
router.use(apiRoutes)


module.exports = router