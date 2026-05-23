import dotenv from 'dotenv';
import app from './src/app.js';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
    console.log(`[Server] running on port ${PORT}`);
});