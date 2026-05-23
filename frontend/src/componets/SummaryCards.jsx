import React from 'react';

/**
 * SummaryCards component to show total transaction amount and transaction frequency.
 * Renders high-quality pulse skeleton loaders during active API calls to avoid layout shifts.
 * 
 * @param {Object} props
 * @param {Object} [props.summary] - Computed metrics from API.
 * @param {boolean} props.loading - Request pending indicator.
 */
const SummaryCards = ({ summary, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Total Amount Card */}
      <div className="bg-sticky-blue border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center min-h-[120px] transition-all">
        <p className="text-sm font-black tracking-wider uppercase opacity-80 mb-2">Total Amount</p>
        {loading ? (
          <div className="h-10 bg-black/10 rounded-lg w-44 animate-pulse mt-1"></div>
        ) : (
          <h2 className="text-4xl lg:text-5xl font-headings font-black tracking-tight transition-opacity duration-350">
            ₹{summary ? summary.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 }) : '0.00'}
          </h2>
        )}
      </div>
      
      {/* Transactions Found Card */}
      <div className="bg-sticky-mint border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center min-h-[120px] transition-all">
        <p className="text-sm font-black tracking-wider uppercase opacity-80 mb-2">Transactions Found</p>
        {loading ? (
          <div className="h-10 bg-black/10 rounded-lg w-32 animate-pulse mt-1"></div>
        ) : (
          <h2 className="text-4xl lg:text-5xl font-headings font-black tracking-tight transition-opacity duration-350">
            {summary ? summary.transactionCount : '0'}{' '}
            <span className="text-2xl opacity-60">times</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default SummaryCards;
