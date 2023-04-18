import express from 'express';
import { fillSlot } from '../postController.js';

const router = express.Router();
router.get('/:id', fillSlot);

export default router;