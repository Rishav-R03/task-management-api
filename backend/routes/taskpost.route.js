import express from 'express';
import {createTodo} from '../controllers/todo.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
const router = express.Router(); 
router.post('/',isAuthenticated,createTodo);
export default router;