/**
 * Parses and extracts transactions from raw bank statement text.
 * 
 * @param {string} text - The raw text extracted from the PDF bank statement.
 * @param {Object} options - Filtering options.
 * @param {string} [options.keyword=''] - Optional keyword to filter transactions by description.
 * @param {string} [options.type='both'] - Transaction type filter ('credit', 'debit', or 'both').
 * @returns {Array<Object>} List of structured transaction objects.
 */
export const extractTransactions = (text, options = {}) => {
    const { keyword = '', type = 'both' } = options;
    
    if (!text) {
        return [];
    }

    // Bank statements are line-oriented, so we split text into individual lines
    const lines = text.split('\n');
    const transactions = [];

    // Regex to match typical date formats:
    // - DD/MM/YYYY, DD-MM-YYYY, DD.MM.YYYY
    // - YYYY-MM-DD, YYYY/MM/DD
    // - DD-MMM-YYYY (e.g., 12-May-2026)
    // - DD MMM YYYY (e.g., 12 May 2026)
    const dateRegex = /\b(\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}|\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}-[A-Za-z]{3}-\d{2,4}|\d{1,2}\s+[A-Za-z]{3,9}\s+\d{2,4})\b/;

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        // Step 1: Detect transaction date.
        // A valid transaction row must contain a date. If not found, skip the line.
        const dateMatch = line.match(dateRegex);
        if (!dateMatch) {
            continue;
        }
        const date = dateMatch[0];

        // Remove the date string from the line so we don't accidentally parse
        // numeric date components (like the year or day) as amounts.
        const lineWithoutDate = line.replace(date, ' ');

        // Step 2: Extract transaction amount using regex.
        // Bank statements list amounts and balances. We look for decimal-formatted numbers first
        // (e.g., 5,000.00 or 150.50) since they are the most accurate representation of currency.
        const decimalRegex = /\b\d{1,3}(?:,\d{3})*(?:\.\d{2})\b/g;
        let amountMatches = lineWithoutDate.match(decimalRegex) || [];

        if (amountMatches.length === 0) {
            // Fallback: search for numbers with optional decimals, filtering out small integers
            // (e.g., page numbers, single-digit line counters, check numbers under 10)
            const generalRegex = /\b\d{1,3}(?:,\d{3})*(?:\.\d{2})?\b/g;
            const generalMatches = lineWithoutDate.match(generalRegex) || [];
            amountMatches = generalMatches.filter(val => {
                const num = parseFloat(val.replace(/,/g, ''));
                return !isNaN(num) && num > 9;
            });
        }

        // If no valid amount-like numbers are found, this line isn't a transaction.
        if (amountMatches.length === 0) {
            continue;
        }

        // Parse matches into floating-point numbers
        const parsedAmounts = amountMatches.map(m => parseFloat(m.replace(/,/g, '')));

        let amount = 0;
        if (parsedAmounts.length >= 2) {
            // In most standard statement formats, the last amount on the line is the running balance,
            // and the second-to-last amount is the actual transaction amount.
            amount = parsedAmounts[parsedAmounts.length - 2];
        } else {
            // If there's only one amount found, it must be the transaction amount itself.
            amount = parsedAmounts[0];
        }

        // Step 3: Detect Credit (CR) vs Debit (DR)
        let txType = 'debit'; // Default fallback
        const lineUpper = line.toUpperCase();

        // Check for common credit and debit keywords
        const isCredit = lineUpper.includes('CR') || 
                         lineUpper.includes('CREDIT') || 
                         lineUpper.includes('DEPOSIT') || 
                         lineUpper.includes('RECEIVED') || 
                         lineUpper.includes('INWARD') || 
                         lineUpper.includes('+');

        const isDebit = lineUpper.includes('DR') || 
                        lineUpper.includes('DEBIT') || 
                        lineUpper.includes('WITHDRAWAL') || 
                        lineUpper.includes('SENT') || 
                        lineUpper.includes('PAYMENT') || 
                        lineUpper.includes('CHARGES') || 
                        lineUpper.includes('OUTWARD') || 
                        lineUpper.includes('-');

        if (isCredit && !isDebit) {
            txType = 'credit';
        } else if (isDebit && !isCredit) {
            txType = 'debit';
        } else if (lineUpper.includes('CR')) {
            txType = 'credit';
        } else if (lineUpper.includes('DR')) {
            txType = 'debit';
        }

        // Step 4: Clean and format description
        // Use the line itself (with normalized spaces) as the descriptive context
        const description = line.replace(/\s+/g, ' ').trim();

        // Step 5: Filter by keyword (case-insensitive description matching)
        if (keyword && !description.toLowerCase().includes(keyword.toLowerCase())) {
            continue;
        }

        // Step 6: Filter by transaction type (credit, debit, or both)
        if (type && type !== 'both' && txType !== type) {
            continue;
        }

        transactions.push({
            date,
            description,
            type: txType,
            amount: Math.abs(amount) // Ensure positive number representation
        });
    }

    return transactions;
};
