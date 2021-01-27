// Set up dependencies
const router = require("express").Router();
//We need "path" to access the static files for the html and create the routes.
const path = require("path");

//exporting the router
module.exports = router 

 //route for index.html
 router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});
//route for exercise.html
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});
//route for stats.html
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});   
