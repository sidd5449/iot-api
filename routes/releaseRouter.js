import express from 'express';
import { releaseSlot } from '../postController.js';

const router = express.Router();
router.get('/:id', releaseSlot);

export default router;