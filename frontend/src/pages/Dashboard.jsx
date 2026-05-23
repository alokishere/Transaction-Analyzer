import React, { useState } from 'react';
import Navbar from '../componets/Navbar';
import UploadBox from '../componets/UploadBox';
import SummaryCards from '../componets/SummaryCards';
import TransactionTable from '../componets/TransactionTable';
import { analyzeStatement } from '../services/api.js';

/**
 * Dashboard is the primary screen for statement configuration and results display.
 * Manages lifted React state for PDF upload files, search keyword filters,
 * loading animations, service errors, and returned transaction lists.
 */
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);

  /**
   * Dispatches analysis API call and handles diverse HTTP and Network states.
   * 
   * @param {File} file - Bank statement PDF.
   * @param {string} keyword - Optional description search term.
   * @param {string} type - Transaction type criteria ('credit', 'debit', or 'both').
   */
  const handleAnalyze = async (file, keyword, type) => {
    setLoading(true);
    setError(null);
    setTransactions([]);
    setSummary(null);
    setAnalyzed(false);

    try {
      const response = await analyzeStatement(file, keyword, type);
      if (response && response.success) {
        setTransactions(response.transactions || []);
        setSummary(response.summary || null);
        setAnalyzed(true);
      } else {
        setError(response.error || 'Failed to analyze the statement.');
      }
    } catch (err) {
      console.error('[Dashboard Integration Error]:', err);
      
      const apiError = err.response?.data?.error;
      const status = err.response?.status;
      
      if (status === 404) {
        // Special Case: No transaction results match specified filters (404 response)
        setTransactions([]);
        setSummary({ totalAmount: 0, creditTotal: 0, debitTotal: 0, transactionCount: 0 });
        setAnalyzed(true); // Complete flow to trigger filtered empty-table indicators
      } else if (status === 422) {
        setError(apiError || 'Failed to extract text. Make sure the PDF is selectable (not a flat image or scanned statement).');
      } else if (status === 400) {
        setError(apiError || 'Invalid parameters. Please check the statement file and options.');
      } else if (!err.response) {
        setError('Network Connection Failed. Ensure the analyzer backend server is running and reachable.');
      } else {
        setError(apiError || err.message || 'An internal server error occurred while processing the file.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground w-full overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-headings font-black uppercase tracking-tight mb-2">Analysis Setup</h1>
          <p className="text-lg font-bold opacity-70">Configure parameters to extract insights from your statement.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload & Filters */}
          <div className="lg:col-span-1">
            <UploadBox 
              loading={loading}
              error={error}
              onAnalyze={handleAnalyze}
            />
          </div>
          
          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            <SummaryCards 
              summary={summary}
              loading={loading}
            />
            <TransactionTable 
              transactions={transactions}
              loading={loading}
              analyzed={analyzed}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;