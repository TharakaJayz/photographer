import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import mongoose from "mongoose";


const app = express();
app.use((cors()));
app.use(bodyParser.json());


try{
    mongoose.connect("mongodb+srv://tharakaprabhath300:7GOVIHgWPrJEfwI2@cluster0.bpcldbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(8080,()=>{
        console.log("connected on 8080");
    })
    

}catch(err){
    console.log("internal error",err);
}