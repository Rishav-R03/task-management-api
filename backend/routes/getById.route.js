import {getById} from '../controllers/getById.contoller.js';
import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.get('/:todoId',isAuthenticated, getById);

export default router;