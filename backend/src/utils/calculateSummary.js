/**
 * Computes financial summary totals for the transaction list.
 * 
 * @param {Array<Object>} transactions - Array of transaction objects.
 * @returns {Object} Calculated summary object containing totalAmount, transactionCount, creditTotal, and debitTotal.
 */
export const calculateSummary = (transactions = []) => {
    let creditTotal = 0;
    let debitTotal = 0;

    // Calculate totals for credits and debits
    transactions.forEach(tx => {
        const amount = Number(tx.amount) || 0;
        if (tx.type === 'credit') {
            creditTotal += amount;
        } else if (tx.type === 'debit') {
            debitTotal += amount;
        }
    });

    const transactionCount = transactions.length;
    // Total processed amount is the sum of all absolute transactions
    const totalAmount = creditTotal + debitTotal;

    // Format output to 2 decimal places to ensure precision consistency
    return {
        totalAmount: Math.round(totalAmount * 100) / 100,
        creditTotal: Math.round(creditTotal * 100) / 100,
        debitTotal: Math.round(debitTotal * 100) / 100,
        transactionCount
    };
};
