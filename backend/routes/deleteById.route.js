import express from 'express';
import { deleteById } from '../controllers/deleteById.contoller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
const router = express.Router();

router.delete('/:todoId',isAuthenticated,deleteById);
export default router;