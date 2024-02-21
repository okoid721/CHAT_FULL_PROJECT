import express from 'express';
import { sendMessages } from '../controller/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
// router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessages);

export default router;
