// const{ Schema, model } = require("mongoose");

// const contactSchema = new Schema({
//     username:{ type:String, required:true},
//     email:{ type:String, required:true},
//     message:{ type:String, required:true}
// });

// const Contact = new model("Contact",contactSchema);
// module.exports = Contact; 

const mongoose = require("mongoose");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(now.getDate()).padStart(2, '0');
const created_date = `${year}-${month}-${day}`;
//const created_date = `${day}-${month}-${year}`;

const contactSchema = new mongoose.Schema({

    contactname:{type:String,require:true},
    contactemail:{type:String,require:true},
    contactmobileno:{type:Number,require:true},
    contactmsg:{type:String,require:true},
    created_date:{type:String,default:created_date}
   
});



const ContactUs = new mongoose.model('contactus',contactSchema);   //check the name with changes 
module.exports = ContactUs;