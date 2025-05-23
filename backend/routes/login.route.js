import express from 'express';
import {loginEndpoint} from '../controllers/login.contoller.js';

const router = express.Router();

router.post('/',loginEndpoint);

export default router;
