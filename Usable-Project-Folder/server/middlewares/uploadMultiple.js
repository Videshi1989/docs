const multer = require('multer');
const path = require('path');

const checkFileType=  (file, cb)=> {
    const filetypes = /jpeg|jpg|png|svg|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if(mimetype && extname) 
    {
        cb(null, true);
    } 
    else 
    {
        cb(null, false);
    }
}


// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, Date.now() + "-" + file.originalname)
    },
});

// Init upload
const uploadMultiple = multer({
    storage: storage,
    limits: { fileSize: 500000 }, // Limit to 512kb per file
    fileFilter: (req, file, cb) => { checkFileType(file, cb); },
}).array('images', 10);    //upload max 10 files each time


module.exports = uploadMultiple;