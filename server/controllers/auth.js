import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const exitinguser = await users.findOne({email});
        if(exitinguser){
            return res.status(404).json({message:"User already exist.."})
        }

        const hashedPassword = await bcrypt.hash(password,789)
        const newUser = await users.create({name,email,password:hashedPassword})
        const token = jwt.sign({email:newUser.email, id:newUser._id}, "test",{expiresIn:'1h'});
        res.status(200).json({result:newUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const exitinguser = await users.findOne({email});
        if(!exitinguser){
            return res.status(404).json({message:"User don't exist.."})
        }
        const isPassword = await bcrypt.compare(password,exitinguser.password);
        if(!isPassword){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({email:exitinguser.email, id:exitinguser._id}, "test",{expiresIn:'1h'});
        res.status(200).json({result:exitinguser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}