import axios from 'axios';

// Get API base URL from Vite environment variables or fallback to port 3000
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // 30 seconds timeout
});

/**
 * Sends bank statement PDF along with filtering criteria to the backend parser.
 * 
 * @param {File} file - The bank statement PDF file.
 * @param {string} [keyword=''] - Optional target counterparty name.
 * @param {string} [type='both'] - Transaction type ('credit', 'debit', or 'both').
 * @returns {Promise<Object>} API parsed data containing transactions and metrics.
 */
export const analyzeStatement = async (file, keyword = '', type = 'both') => {
    if (!file) {
        throw new Error('Please select a PDF file to analyze.');
    }

    const formData = new FormData();
    formData.append('file', file);
    if (keyword) {
        formData.append('keyword', keyword.trim());
    }
    formData.append('type', type.toLowerCase());

    const response = await apiClient.post('/analyzer/process', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
