import React, { useState, useRef } from 'react';
import { UploadCloud, Search, RefreshCw, AlertTriangle } from 'lucide-react';

/**
 * UploadBox allows users to select a PDF statement, input search keyword filters,
 * specify transaction types, and trigger analysis. Renders real-time validations,
 * brutalist-style error blocks, and request loading states.
 * 
 * @param {Object} props
 * @param {boolean} props.loading - Request pending indicator.
 * @param {string|null} props.error - Current error message.
 * @param {Function} props.onAnalyze - Triggers analysis in parent.
 */
const UploadBox = ({ loading, error, onAnalyze }) => {
  const [file, setFile] = useState(null);
  const [counterparty, setCounterparty] = useState("");
  const [transactionType, setTransactionType] = useState("Both");
  const [validationError, setValidationError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setValidationError(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      
      // Client-side file type verification
      if (selectedFile.type !== 'application/pdf') {
        setValidationError('Invalid file type. Please select a PDF statement.');
        setFile(null);
        return;
      }
      
      // Client-side file size verification (limit to 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setValidationError('File is too large. Maximum size is 10MB.');
        setFile(null);
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleAnalyze = () => {
    setValidationError(null);
    if (!file) {
      setValidationError('No PDF uploaded. Please select a bank statement.');
      return;
    }
    
    // Map transaction type options to backend expected parameters
    let apiType = 'both';
    if (transactionType === 'Received') apiType = 'credit';
    if (transactionType === 'Sent') apiType = 'debit';

    onAnalyze(file, counterparty, apiType);
  };

  const activeError = validationError || error;

  return (
    <div className="flex flex-col gap-6">
      {/* Upload Section */}
      <div className="bg-white border-[3px] border-border rounded-[20px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center h-[300px]">
        <div className="w-16 h-16 rounded-full bg-sticky-yellow border-[3px] border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
          <UploadCloud className="size-[28px]" />
        </div>
        <h3 className="text-xl font-headings font-black uppercase mb-2">
          {file ? "File Selected" : "Drop your bank statement"}
        </h3>
        <p className="text-sm font-bold opacity-70 mb-6 max-w-[200px] truncate">
          {file ? file.name : "Supports PDF up to 10MB"}
        </p>
        
        <input 
          type="file" 
          accept=".pdf" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange} 
          disabled={loading}
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className={`bg-neon-green text-foreground border-2 border-border rounded-[10px] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            loading 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95'
          }`}
        >
          {file ? "Change File" : "Browse Files"}
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h4 className="font-headings font-black uppercase mb-4 text-sm">Counterparty Target</h4>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-[18px] opacity-50" />
          <input 
            type="text" 
            placeholder="Search name (e.g., Anil)" 
            value={counterparty}
            onChange={(e) => setCounterparty(e.target.value)}
            disabled={loading}
            className="w-full bg-background border-2 border-border rounded-[10px] py-3 pl-10 pr-4 font-bold focus:outline-none focus:ring-2 focus:ring-neon-green transition-shadow shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.1)]"
          />
        </div>
        
        <h4 className="font-headings font-black uppercase mb-4 text-sm">Transaction Type</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setTransactionType("Received")}
            disabled={loading}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-all border-2 ${
              transactionType === 'Received' 
                ? 'bg-black text-white border-black' 
                : 'bg-white border-border hover:bg-muted text-foreground'
            }`}
          >
            Received
          </button>
          <button 
            onClick={() => setTransactionType("Both")}
            disabled={loading}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-all border-2 ${
              transactionType === 'Both' 
                ? 'bg-black text-white border-black' 
                : 'bg-white border-border hover:bg-muted text-foreground'
            }`}
          >
            Both
          </button>
          <button 
            onClick={() => setTransactionType("Sent")}
            disabled={loading}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-all border-2 ${
              transactionType === 'Sent' 
                ? 'bg-black text-white border-black' 
                : 'bg-white border-border hover:bg-muted text-foreground'
            }`}
          >
            Sent
          </button>
        </div>
        
        <button 
          onClick={handleAnalyze}
          disabled={loading}
          className={`w-full mt-6 bg-sticky-peach text-foreground border-2 border-border rounded-[10px] px-6 py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 uppercase ${
            loading 
              ? 'opacity-50 cursor-not-allowed translate-y-[2px] translate-x-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
              : 'hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95'
          }`}
        >
          {loading ? (
            <>
              <RefreshCw className="size-[18px] animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Statement"
          )}
        </button>

        {/* Brutalist red alert block for input validations or api failures */}
        {activeError && (
          <div className="mt-6 bg-red-100 border-[3px] border-red-600 rounded-[12px] p-4 text-red-850 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] flex gap-2 items-start animate-shake">
            <AlertTriangle className="size-[18px] text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="uppercase font-headings font-black mb-1">Error Encountered</p>
              <p className="opacity-95 text-xs md:text-sm">{activeError}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadBox;
