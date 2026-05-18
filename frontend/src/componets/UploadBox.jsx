import React, { useState, useRef } from 'react';
import { UploadCloud, Search } from 'lucide-react';

const UploadBox = () => {
  const [file, setFile] = useState(null);
  const [counterparty, setCounterparty] = useState("");
  const [transactionType, setTransactionType] = useState("Both");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    const apiData = {
      file: file ? file.name : null,
      counterparty,
      transactionType,
    };
    console.log("Sending data to API:", apiData);
  };

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
        <p className="text-sm font-bold opacity-70 mb-6">
          {file ? file.name : "Supports PDF up to 50MB"}
        </p>
        
        <input 
          type="file" 
          accept=".pdf" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange} 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-neon-green text-foreground border-2 border-border rounded-[10px] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
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
            className="w-full bg-background border-2 border-border rounded-[10px] py-3 pl-10 pr-4 font-bold focus:outline-none focus:ring-2 focus:ring-neon-green transition-shadow shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.1)]"
          />
        </div>
        
        <h4 className="font-headings font-black uppercase mb-4 text-sm">Transaction Type</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setTransactionType("Received")}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-colors border-2 ${transactionType === 'Received' ? 'bg-black text-white border-black' : 'bg-white border-border hover:bg-muted text-foreground'}`}
          >
            Received
          </button>
          <button 
            onClick={() => setTransactionType("Both")}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-colors border-2 ${transactionType === 'Both' ? 'bg-black text-white border-black' : 'bg-white border-border hover:bg-muted text-foreground'}`}
          >
            Both
          </button>
          <button 
            onClick={() => setTransactionType("Sent")}
            className={`flex-1 py-2 text-sm font-black uppercase rounded-[8px] transition-colors border-2 ${transactionType === 'Sent' ? 'bg-black text-white border-black' : 'bg-white border-border hover:bg-muted text-foreground'}`}
          >
            Sent
          </button>
        </div>
        
        <button 
          onClick={handleAnalyze}
          className="w-full mt-6 bg-sticky-peach text-foreground border-2 border-border rounded-[10px] px-6 py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 uppercase"
        >
          Analyze Statement
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
