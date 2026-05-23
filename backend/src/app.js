import express from 'express';
import cors from 'cors';
import analyzerRoutes from './routes/analyzerRoutes.js';

const app = express();

// Enable CORS with default settings
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Root endpoint for status check
app.get('/', (req, res) => {
    res.json({ message: 'Bank Statement Analyzer API is active.' });
});

// Register analyzer routes
app.use('/api/v1/analyzer', analyzerRoutes);

export default app;