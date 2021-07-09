var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
    console.log("Welcome in Node js Application page");
    res.render("index");
});

module.exports = router;