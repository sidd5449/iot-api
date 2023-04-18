import express from 'express';
import { fillSlot } from '../postController.js';

const router = express.Router();
router.post('/:id', fillSlot);

export default router;