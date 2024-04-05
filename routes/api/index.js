const router = require("express").Router();
const notesRoutes = require("./notesRoutes");
const htmlRoutes = require("./htmlRoutes")

router.use("/notes", notesRoutes);
router.use("/html", htmlRoutes)

module.exports = router;