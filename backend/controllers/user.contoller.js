import {User} from '../models/user.model.js'
import bcrypt, { hash } from 'bcrypt';

export const register = async (req,res)=>{
    try{
        const {fullName,email,password} = req.body
        if(!fullName || !email || !password){
            return res.send(401).json({message:"enter all fields",success:false})
        }
        // finding user already registered or not? 
        const user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(401).json({
                message:"Signup failed! Email already exist.",
                success:false
            })
        }
        const hashPassword = await bcrypt.hash(password,10);
        await User.create({
            fullName,
            email,
            password:hashPassword
        })

        return res.status(201).json({message:"Signup success",success:true})
    }catch(err){
        console.log(`Error creating`)
        res.status(500).json({message:err.message})
    }
}

export default register;