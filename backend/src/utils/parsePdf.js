import { PDFParse } from 'pdf-parse';

/**
 * Extracts plain text from a PDF file buffer using the modern pdf-parse v2+ API.
 * 
 * @param {Buffer} fileBuffer - The PDF file buffer.
 * @returns {Promise<string>} The extracted text.
 */
export const parsePdf = async (fileBuffer) => {
    if (!fileBuffer) {
        throw new Error('No file buffer provided for PDF parsing.');
    }
    
    // Instantiate parser using a Uint8Array view of the PDF file buffer
    const parser = new PDFParse({ data: new Uint8Array(fileBuffer) });
    
    try {
        const result = await parser.getText();
        return result.text || '';
    } catch (error) {
        throw new Error(`Failed to parse PDF text: ${error.message}`);
    } finally {
        // Safe cleanup of worker instances to prevent memory leaks
        await parser.destroy();
    }
};
