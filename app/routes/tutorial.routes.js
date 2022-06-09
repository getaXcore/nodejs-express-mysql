module.exports = app => {
    const tutorial = require("../controllers/tutorial.controller.js")
    var router = require("express").Router();
    //create a new Tutorial
    router.post("/",tutorial.create);
    //retrieve all Tutorials
    router.get("/",tutorial.findAll);
    //retrieve all published Tutorials
    router.get("/published",tutorial.findAllPublished);
    //retrieve a single Tutorial with id
    router.get("/:id",tutorial.findOne);
    //update a Tutorial with id
    router.put("/:id",tutorial.update);
    //delete a Tutorial with id
    router.delete("/:id",tutorial.delete);
    //delete all Tutorials
    router.delete("/",tutorial.deleteAll);
    app.use('/api/tutorials',router);
};