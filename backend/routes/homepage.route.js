import {homepageController} from '../controllers/homepage.contoller.js';
import express from 'express';

const router = express.Router();

router.get('/',homepageController);

export default router;