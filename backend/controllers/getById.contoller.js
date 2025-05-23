import { Todo } from "../models/todo.model.js";

export const getById = async (req, res) => {
    try {
        const todoId = req.params.todoId;
        console.log(req.params);
        if (!todoId) {
            return res.status(400).json({
                message: "Todo ID is required",
                success: false
            });
        }

        // Fix: Proper use of findOne with query object
        const result = await Todo.findOne({ _id: todoId });

        if (!result) {
            return res.status(404).json({
                message: "Task not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Found the task!",
            success: true,
            result
        });
    } catch (err) {
        console.error("Error fetching task:", err.message);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export default getById;
