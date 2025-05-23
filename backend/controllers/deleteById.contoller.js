import { Todo } from "../models/todo.model.js";
import {isAuthenticated} from '../middleware/isAuthenticated.js';

export const deleteById = async (req ,res)=>{
    try{
    const todoId = req.params.todoId;
    if(!todoId) return res.status(403).json({
        message:"Todo ID is required",
        success:false,
    });

    const result = await Todo.findByIdAndDelete(todoId);
    if(!result) return res.status(404).json({
        message:"Cannot find note with entered id",
        success:false
    });

    return res.status(200).json({
        message:"Successfully deleted",
        success:true
    })

    }catch(err){
        console.log("Error in deleting task",err.message);
        return res.status(500).json({message:"Internal server error!"});
    }

}
export default deleteById;