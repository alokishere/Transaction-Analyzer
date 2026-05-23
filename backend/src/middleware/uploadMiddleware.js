import multer from 'multer';

// Configure in-memory storage for uploaded files
const storage = multer.memoryStorage();

// File filter to restrict uploads to PDF files only
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed!'), false);
    }
};

// Initialize multer with size limits and file filtering
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
});

export default upload;
