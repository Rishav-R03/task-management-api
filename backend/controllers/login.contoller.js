import {User} from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const loginEndpoint = async (req,res)=>{
    console.log(req);
    const {email,password} = req.body; 
    if(!email || !password){
        return res.status(400).json({message:"Enter email and password",success:false});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({
            message:"Cannot find email, kindly signup!",
            success:false 
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(403).json({
            message:"Incorrect email or password",
            success:false
        });
    }
    const token = await jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    
    return res.status(200).cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge: 24*60*60*1000,
    }).json({
        message:`Login successfull, welcome ${user.fullName}`,
        success:true
    })
};
export default loginEndpoint;