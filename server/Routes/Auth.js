import express from 'express'
import bcrypt from 'bcrypt';

//import models
import { UserModel } from '../Models/User'

const router=express.Router();

router.post("/signup",async(req,res)=>{
    try{
        const AlreadyRegistered=await UserModel.findOne({email:req.body.email})
        console.log(AlreadyRegistered)
        if(AlreadyRegistered)
            throw new Error("Already Registered with this Email")
        const UserDetails=req.body;
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        UserDetails.password=hashedPassword
        const user=await UserModel.create(req.body)
        return res.status(200).json({user})
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
})

router.post('/login',async(req,res)=>{
    try{
        console.log(req.body.email)
        const User=await UserModel.findOne({email:req.body.email})
        console.log(User)
        if(!User)
            throw new Error("there is no user with this Email")
        const checkPassword=await bcrypt.compare(req.body.password,User.password);
        if(!checkPassword)
            throw new Error("password is Wrong")
        return res.status(200).json({user:User})
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
})

router.get('/check',(req,res)=>{
    return res.send("server is up")
})

export default router