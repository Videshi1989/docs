const mongoose = require("mongoose");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(now.getDate()).padStart(2, '0');
const created_date = `${year}-${month}-${day}`;
//const created_date = `${day}-${month}-${year}`;


const MultiImageSchema = new mongoose.Schema({

    categoryid:{type:String,require:true},
    subcategoryid:{type:String,require:true},
    childcategoryid:{type:String,require:true},
    subchildcategoryid:{type:String,require:true},
    imagesrc:{type:String,require:true},
    imagename:{type:String,require:true},
    created_date:{type:String,default:created_date}
   
});



const MultiImages = new mongoose.model('MultiImages',MultiImageSchema); 
module.exports = MultiImages;