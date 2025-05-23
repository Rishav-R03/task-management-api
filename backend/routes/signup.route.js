import express from 'express';
import { register } from '../controllers/user.contoller.js';

const router = express.Router();

// Define your route
router.post("/", register);

// Export the entire router
export default router;
