import express from 'express';
import { createshorturl, redirecttooriginal } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', createshorturl);
router.get('/:code', redirecttooriginal);

export default router;
