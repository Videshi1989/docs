const mongoose = require("mongoose");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(now.getDate()).padStart(2, '0');
const created_date = `${year}-${month}-${day}`;
//const created_date = `${day}-${month}-${year}`;

const subchildcategorySchema = new mongoose.Schema({

    categoryid:{type:String,require:true},
    subcategoryid:{type:String,require:true},
    childcategoryid:{type:String,require:true},
    subchildcategoryname:{type:String,require:true},
    status:{type:String,require:true},
    created_date:{type:String,default:created_date}
   
});



const SubChildCategory = new mongoose.model('subchildcategorySchema',subchildcategorySchema); 
module.exports = SubChildCategory;