import {Todo} from '../models/todo.model.js';

export const createTodo = async (req , res)=>{
    try{const {title,description} = req.body; 
    if(!title ||!description){
        return res.status(400).json({message:"Title and Descriptin are required!"});
    }
    const todo = await Todo.create({
        title,
        description
    })
    return res.status(201).json({
        message:"Task added successfully!",
        todo, // return the created todo object 
    })
    }catch(err){
        console.log("Error in creating the Task!",err.message);
        return res.status(500).json({message:"Internal server error!"});
    }
}

export default createTodo;