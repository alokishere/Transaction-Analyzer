import React, { useState, useEffect } from 'react';
import { ArrowDownLeft, ArrowUpRight, Download, RefreshCw } from 'lucide-react';

/**
 * TransactionTable displays matched bank transactions in a brutalist-style interactive table.
 * Supports pagination, CSV export, robust empty/pre-analysis messages, and skeleton rows during loading.
 * 
 * @param {Object} props
 * @param {Array<Object>} props.transactions - List of extracted transactions.
 * @param {boolean} props.loading - Processing flag for skeleton animation.
 * @param {boolean} props.analyzed - Flag indicating if an analysis has run.
 */
const TransactionTable = ({ transactions = [], loading, analyzed }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset pagination page when new transactions list is received
  useEffect(() => {
    setCurrentPage(1);
  }, [transactions]);

  // Compute pagination indices
  const totalItems = transactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = transactions.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Triggers browser download of current transactions list in CSV format
  const handleExportCSV = () => {
    if (totalItems === 0) return;

    const headers = ['Date', 'Description', 'Type', 'Amount (INR)'];
    const csvContent = [
      headers.join(','),
      ...transactions.map(tx => [
        `"${tx.date}"`,
        `"${tx.description.replace(/"/g, '""')}"`,
        `"${tx.type}"`,
        tx.amount
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `statement_analysis_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-headings font-black uppercase">Matched Records</h3>
        {totalItems > 0 && !loading && (
          <button 
            onClick={handleExportCSV}
            className="flex items-center gap-2 text-sm font-bold bg-background border-2 border-border px-4 py-2 rounded-[8px] hover:bg-muted transition-all active:scale-95"
          >
            <Download className="size-[16px]" />
            Export CSV
          </button>
        )}
      </div>
      
      <div className="overflow-x-auto min-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-[3px] border-border">
              <th className="pb-4 font-black uppercase text-xs tracking-wider">Date</th>
              <th className="pb-4 font-black uppercase text-xs tracking-wider">Raw Transaction String</th>
              <th className="pb-4 font-black uppercase text-xs tracking-wider">Type</th>
              <th className="pb-4 font-black uppercase text-xs tracking-wider text-right">Estimated Amount</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Display 5 skeleton rows during processing to maintain structure without shifts
              Array.from({ length: 5 }).map((_, idx) => (
                <tr key={`skeleton-${idx}`} className="border-b-2 border-border/20 last:border-0 animate-pulse">
                  <td className="py-4"><div className="h-4 bg-muted rounded w-20"></div></td>
                  <td className="py-4"><div className="h-4 bg-muted rounded w-5/6"></div></td>
                  <td className="py-4"><div className="h-6 bg-muted rounded-full w-24 border border-border/10"></div></td>
                  <td className="py-4 flex justify-end"><div className="h-4 bg-muted rounded w-16"></div></td>
                </tr>
              ))
            ) : totalItems > 0 ? (
              // Display paginated list of transactions
              currentItems.map((txn, idx) => (
                <tr key={`txn-${idx}`} className={`${idx !== currentItems.length - 1 ? 'border-b-2 border-border/20' : ''}`}>
                  <td className="py-4 font-bold text-sm whitespace-nowrap">{txn.date}</td>
                  <td className="py-4 font-bold text-sm max-w-xs md:max-w-md truncate" title={txn.description}>
                    {txn.description}
                  </td>
                  <td className="py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-border text-xs font-black uppercase ${txn.type === 'credit' ? 'bg-neon-green' : 'bg-sticky-peach'}`}>
                      {txn.type === 'credit' ? <ArrowDownLeft className="size-[14px]" /> : <ArrowUpRight className="size-[14px]" />}
                      {txn.type === 'credit' ? 'Received' : 'Sent'}
                    </span>
                  </td>
                  <td className="py-4 font-black text-right whitespace-nowrap">
                    ₹{txn.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))
            ) : (
              // Display empty states
              <tr>
                <td colSpan="4" className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground p-6">
                    <p className="text-lg font-black uppercase opacity-75">
                      {analyzed 
                        ? "No matched records" 
                        : "No data loaded"}
                    </p>
                    <p className="text-sm font-bold opacity-60 max-w-sm">
                      {analyzed 
                        ? "No transactions match your search keyword or transaction type filters."
                        : "Upload your PDF statement on the left to start extracting and analyzing transaction data."}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination controls */}
      {totalItems > 0 && !loading && (
        <div className="mt-6 pt-4 border-t-[3px] border-border flex items-center justify-between text-sm font-bold">
          <span className="opacity-70">
            Showing {startIndex + 1}-{endIndex} of {totalItems} results
          </span>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`hover:opacity-50 transition-opacity ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              &lt; Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`hover:opacity-50 transition-opacity ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              Next &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
