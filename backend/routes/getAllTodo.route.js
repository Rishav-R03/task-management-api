import express from 'express'
import fetchAll from '../controllers/getAllTodo.contoller.js'
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router(); 

router.get('/',isAuthenticated,fetchAll);
export default router;