import {Todo} from '../models/todo.model.js' 

export const updateById = async (req,res)=>{
    try {
        const todoId = req.params.todoId;
        const title = req.body
        // const todo = await Todo.findById(todoId);
        const todo = await Todo.findByIdAndUpdate(todoId,title,{new:true});
        return res.status(200).json({
            success:true,
            todo,
            message:'Updated todo'
        })

    } catch (error) {
        console.log(error.message);   
        return res.status(500).json({message:"Internal server error!"});
    }

}