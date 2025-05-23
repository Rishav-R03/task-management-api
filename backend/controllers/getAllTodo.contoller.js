import { Todo } from "../models/todo.model.js";

export const fetchAll = async (req ,res)=>{
    try{
    const response = await Todo.find().lean();
    console.log(response); 
    return res.status(200).json({
        success:true,
        response 
    })
    }catch(err){
        console.log(`Cannot get all todos`,err.message);
        return res.status(500).json({message:"Internal server error!"});
    }
}

export default fetchAll;