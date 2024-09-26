const mongoose= require("mongoose") // create a schema 
const fruitSchema= new mongoose.Schema({
    name: "string",
    isReadyToEat: Boolean
});

const Fruit= mongoose.model("Fruit", fruitSchema); // Fruit is the name I want to give my model. 
//export the model because we want to use this model outside of this file.
//module.exports=Fruit; // this says export this variable that stores a model which a new instance of the class schema.

module.exports=mongoose.model("Fruit", new mongoose.Schema ({ // this is just a way of writing it without storing into variables. 
    name: "string",
    isReadyToEat: Boolean,
}))