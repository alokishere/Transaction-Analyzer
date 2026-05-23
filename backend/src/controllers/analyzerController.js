import { parsePdf } from '../utils/parsePdf.js';
import { extractTransactions } from '../utils/extractTransactions.js';
import { calculateSummary } from '../utils/calculateSummary.js';

/**
 * Controller handler to process uploaded PDF statement, parse transactions, and filter results.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const processStatement = async (req, res) => {
    try {
        // 1. Validate: Missing file check
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'Missing file. Please upload a PDF bank statement.'
            });
        }

        // 2. Validate: Invalid PDF check (double check buffer existence and mimetype)
        if (req.file.mimetype !== 'application/pdf') {
            return res.status(400).json({
                success: false,
                error: 'Invalid file type. Only PDF statements are supported.'
            });
        }

        // Extract parameters from form-data body
        const { keyword = '', type = 'both' } = req.body;

        // Validate type parameter value
        const allowedTypes = ['credit', 'debit', 'both'];
        if (!allowedTypes.includes(type.toLowerCase())) {
            return res.status(400).json({
                success: false,
                error: "Invalid type. Must be 'credit', 'debit', or 'both'."
            });
        }

        let extractedText = '';
        
        // 3. Extract text from PDF buffer
        try {
            extractedText = await parsePdf(req.file.buffer);
        } catch (parseError) {
            console.error('[Controller Error] PDF parsing failure:', parseError);
            return res.status(422).json({
                success: false,
                error: `Failed to extract text from the PDF: ${parseError.message}`
            });
        }

        // Validate that some text was actually parsed from the document
        if (!extractedText || extractedText.trim().length === 0) {
            return res.status(422).json({
                success: false,
                error: 'Invalid PDF structure. No readable text could be extracted.'
            });
        }

        // 4. Convert text to structured transaction lines and filter
        const transactions = extractTransactions(extractedText, {
            keyword: keyword.trim(),
            type: type.toLowerCase()
        });

        // 5. Validate: Empty results check
        if (transactions.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'No matching transactions found with the specified filters.'
            });
        }

        // 6. Calculate summary metrics
        const summary = calculateSummary(transactions);

        // 7. Return clean and structured JSON response
        return res.status(200).json({
            success: true,
            summary,
            transactions
        });

    } catch (error) {
        console.error('[Controller Critical Error]:', error);
        return res.status(500).json({
            success: false,
            error: 'An internal server error occurred while processing the bank statement.'
        });
    }
};