const mongoose = require("mongoose");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(now.getDate()).padStart(2, '0');
const created_date = `${year}-${month}-${day}`;
//const created_date = `${day}-${month}-${year}`;

const subcategorySchema = new mongoose.Schema({

    categoryid:{type:String,require:true},
    subcategoryname:{type:String,require:true},
    imagesrc:{type:String,default:null},
    imagename:{type:String,default:null},
    status:{type:String,require:true},
    created_date:{type:String,default:created_date}
   
});



const SubCategory = new mongoose.model('subcategorySchema',subcategorySchema); 
module.exports = SubCategory;