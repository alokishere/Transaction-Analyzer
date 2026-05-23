import { createRequire } from 'module';

// Use createRequire to safely load CommonJS modules that don't provide ES Module default exports
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

/**
 * Extracts plain text from a PDF file buffer.
 * @param {Buffer} fileBuffer - The PDF file buffer.
 * @returns {Promise<string>} The extracted text.
 */
export const parsePdf = async (fileBuffer) => {
    if (!fileBuffer) {
        throw new Error('No file buffer provided for PDF parsing.');
    }
    
    try {
        const data = await pdf(fileBuffer);
        return data.text || '';
    } catch (error) {
        throw new Error(`Failed to parse PDF text: ${error.message}`);
    }
};
