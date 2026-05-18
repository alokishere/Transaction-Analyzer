# V1 Technical Implementation Guide
Bank Statement Transaction Analyzer

---

# 1. V1 Main Goal

Build a working MVP that:

1. Uploads PDF bank statement
2. Extracts text
3. Finds matching transactions
4. Detects CR/DR
5. Calculates total
6. Returns filtered data

NO:
- Database
- Auth
- Charts
- OCR
- AI
- Multi-user

---

# 2. Best Tech Stack (Do NOT Overcomplicate)

# Frontend
| Purpose | Package |
|---|---|
| UI | React.js + Vite |
| Styling | Tailwind CSS |
| HTTP Requests | Axios |

---

# Backend
| Purpose | Package |
|---|---|
| Server | Express.js |
| File Upload | Multer |
| PDF Parsing | pdf-parse |
| Environment Variables | dotenv |
| CORS | cors |

---

# 3. Why These Packages?

## multer
Purpose:
- Handle multipart/form-data
- Receive PDF uploads

Do NOT use:
- formidable
- busboy

multer is enough for V1.

---

## pdf-parse
Purpose:
- Extract plain text from PDFs

Why?
- Lightweight
- Simple
- Good enough for bank statements

Do NOT start with OCR.

Most bank statements already contain selectable text.

---

## axios
Purpose:
- Send frontend requests to backend

Simple and reliable.

---

# 4. Recommended Project Structure

```bash
project/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadBox.jsx
│   │   │   ├── SearchForm.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   └── TransactionTable.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── controllers/
│   │   └── analyzerController.js
│   │
│   ├── routes/
│   │   └── analyzerRoutes.js
│   │
│   ├── middleware/
│   │   └── uploadMiddleware.js
│   │
│   ├── utils/
│   │   ├── extractTransactions.js
│   │   ├── parsePdf.js
│   │   └── calculateSummary.js
│   │
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# 5. Full Technical Flow

# FRONTEND FLOW

```text
User uploads PDF
        ↓
React stores file in state
        ↓
User enters keyword
        ↓
User selects:
- Sent
- Received
- Both
        ↓
Axios sends FormData
        ↓
POST /api/v1/analyzer/process
```

---

# BACKEND FLOW

```text
Receive PDF
        ↓
multer handles upload
        ↓
pdf-parse extracts text
        ↓
Convert text into lines
        ↓
Filter matching transactions
        ↓
Detect CR / DR
        ↓
Extract amount
        ↓
Calculate totals
        ↓
Send JSON response
```

---

# 6. Core Backend Logic Flow

# Step 1 — Upload PDF

Route:

```js
router.post(
  "/process",
  upload.single("file"),
  processStatement
);
```

---

# Step 2 — Extract PDF Text

```js
const pdf = require("pdf-parse");

const data = await pdf(req.file.buffer);

const text = data.text;
```

---

# Step 3 — Split Into Lines

```js
const lines = text.split("\n");
```

Why?

Because bank statements are line-based.

You need transaction rows.

---

# Step 4 — Find Matching Transactions

```js
const matched = lines.filter((line) =>
  line.toLowerCase().includes(keyword.toLowerCase())
);
```

---

# Step 5 — Detect Credit/Debit

```js
if (line.includes("CR")) {
  type = "credit";
}

if (line.includes("DR")) {
  type = "debit";
}
```

---

# Step 6 — Extract Amount

Example Regex:

```js
const amountRegex = /(\d{1,3}(,\d{3})*(\.\d{2})?)/g;
```

Extract:

```js
const amounts = line.match(amountRegex);
```

Take last valid amount.

Because usually:
- balance appears last
- amount appears before balance

You must test statement structure carefully.

---

# Step 7 — Build Transaction Object

```js
{
  date: "12-05-2026",
  description: line,
  type: "credit",
  amount: 5000
}
```

---

# Step 8 — Calculate Summary

```js
const totalAmount = transactions.reduce(
  (sum, tx) => sum + tx.amount,
  0
);

const transactionCount = transactions.length;
```

---

# Step 9 — Send Response

```js
res.json({
  success: true,
  summary: {
    totalAmount,
    transactionCount,
  },
  transactions,
});
```

---

# 7. Frontend UI Flow

# Main Screen

```text
--------------------------------
| Upload PDF                  |
--------------------------------

Keyword Input

Dropdown:
- Sent
- Received
- Both

[ Analyze Button ]

--------------------------------
| Summary Cards               |
--------------------------------

--------------------------------
| Transactions Table          |
--------------------------------
```

---

# 8. Recommended Frontend State

```js
const [file, setFile] = useState(null);

const [keyword, setKeyword] = useState("");

const [type, setType] = useState("both");

const [results, setResults] = useState(null);

const [loading, setLoading] = useState(false);
```

---

# 9. API Service Structure

```js
import axios from "axios";

export const analyzeStatement = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/v1/analyzer/process",
    formData
  );

  return response.data;
};
```

---

# 10. Best Multer Setup

```js
const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
```

IMPORTANT:
Use memoryStorage()

Why?

Because:
- You do NOT need permanent files
- Faster processing
- Cleaner architecture

---

# 11. Biggest Real Engineering Challenge

NOT frontend.

NOT Tailwind.

NOT Express.

The REAL challenge is:

```text
Different bank statement formats
```

Every bank:
- structures rows differently
- formats dates differently
- formats CR/DR differently

So your parser must be:
- modular
- isolated
- testable

That is why:

```bash
utils/extractTransactions.js
```

must stay separate.

---

# 12. Smart Engineering Decision

Do NOT tightly couple:
- PDF extraction
- transaction parsing
- response formatting

Keep them separate.

BAD:

```js
everything inside controller
```

GOOD:

```text
Controller
  ↓
PDF Parser
  ↓
Transaction Extractor
  ↓
Summary Calculator
```

This is scalable.

---

# 13. Suggested Development Order

# Phase 1

ONLY:

```js
console.log(text)
```

If text extraction fails:
everything fails.

---

# Phase 2

Extract lines.

---

# Phase 3

Find keyword matches.

---

# Phase 4

Extract amounts.

---

# Phase 5

Calculate totals.

---

# Phase 6

Build frontend UI.

---

# 14. What NOT To Do

DO NOT:
- add MongoDB
- add JWT
- add charts
- add OCR
- add Redux
- add TypeScript initially
- add socket.io

You are building:
- parsing engine first

Everything else later.

---

# 15. Best V1 Success Criteria

V1 succeeds if:

✅ PDF uploads correctly

✅ Text extracts correctly

✅ Keyword filtering works

✅ Totals are accurate

✅ Transactions render properly

That is enough for MVP validation.

---
```