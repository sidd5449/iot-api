import express from 'express';
import { releaseSlot } from '../postController.js';

const router = express.Router();
router.post('/:id', releaseSlot);

export default router;