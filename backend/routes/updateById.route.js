import {updateById} from '../controllers/updateById.controller.js';
import express from 'express'
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();
router.put("/:todoId",isAuthenticated,updateById);
export default router 
