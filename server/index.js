import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
import Auth from './Routes/Auth'

//middlewares
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/auth',Auth)
app.get('/myapp/test/', function(req, res){
  res.send("Hello from the 'test' URL");
});

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

const Port=process.env.PORT || 4000
app.listen(Port,()=>{
    console.log("server is running at the ",Port);
})
