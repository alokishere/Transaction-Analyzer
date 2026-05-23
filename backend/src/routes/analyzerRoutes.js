import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import { processStatement } from '../controllers/analyzerController.js';

const router = express.Router();

// Define POST process route with multer file upload middleware and controller handler
router.post('/process', upload.single('file'), processStatement);

export default router;
