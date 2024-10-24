const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './uploads/',     //need to create a folder name of uploads
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, Date.now() + "-" + file.originalname)
        
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 500000}, // Limit to 512kb 500000
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|svg|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) 
    {
       return cb(null, true);
    } 
    else 
    {
       cb('Please upload image Only!');
    }
}

module.exports = upload;