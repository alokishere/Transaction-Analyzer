import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Download } from 'lucide-react';

const TransactionTable = () => {
  const transactions = [
    { id: 1, date: '2023-10-24', raw: 'NEFT/UPI/ANIL VISHW...', type: 'Received', amount: '₹5,000.00' },
    { id: 2, date: '2023-10-15', raw: 'IMPS/P2A/ANIL VISHW...', type: 'Sent', amount: '₹12,000.00' },
    { id: 3, date: '2023-09-28', raw: 'UPI/ANIL VISHWAKAR...', type: 'Received', amount: '₹3,500.00' },
    { id: 4, date: '2023-09-10', raw: 'RTGS/ANIL VISHWAKA...', type: 'Received', amount: '₹4,500.00' },
  ];

  return (
    <div className="bg-white border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-headings font-black uppercase">Matched Records</h3>
        <button className="flex items-center gap-2 text-sm font-bold bg-background border-2 border-border px-4 py-2 rounded-[8px] hover:bg-muted transition-colors">
          <Download className="size-[16px]" />
          Export
        </button>
      </div>
      
      <div className="overflow-x-auto">
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
            {transactions.map((txn, idx) => (
              <tr key={txn.id} className={`${idx !== transactions.length - 1 ? 'border-b-2 border-border/20' : ''}`}>
                <td className="py-4 font-bold text-sm">{txn.date}</td>
                <td className="py-4 font-bold text-sm">{txn.raw}</td>
                <td className="py-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-border text-xs font-black uppercase ${txn.type === 'Received' ? 'bg-neon-green' : 'bg-sticky-peach'}`}>
                    {txn.type === 'Received' ? <ArrowDownLeft className="size-[14px]" /> : <ArrowUpRight className="size-[14px]" />}
                    {txn.type}
                  </div>
                </td>
                <td className="py-4 font-black text-right">{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 pt-4 border-t-[3px] border-border flex items-center justify-between text-sm font-bold">
        <span className="opacity-70">Showing 1-4 of 5 results</span>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-50 transition-opacity">&lt; Prev</button>
          <span>Page 1 of 2</span>
          <button className="hover:opacity-50 transition-opacity">Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
