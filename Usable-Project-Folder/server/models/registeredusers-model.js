const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(now.getDate()).padStart(2, '0');
const created_date = `${year}-${month}-${day}`;
//const created_date = `${day}-${month}-${year}`;

const RegisteredUsersSchema = new mongoose.Schema({

    fullname:{type:String,require:true},
    email:{type:String,require:true},
    mobileno:{type:Number,require:true},
    password:{type:String,require:true},
    isAdmin:{type:Boolean,default:false},
    imagesrc:{type:String,default:null},
    imagename:{type:String,default:null},
    usertype:{type:String,default:'user'},
    status:{type:String,default:'enable'},
    created_date:{type:String,default:created_date}

});

RegisteredUsersSchema.methods.generateToken = async function(){  
    try
    {
        return jwt.sign({userId: this._id.toString(),email: this.email,isAdmin: this.isAdmin },process.env.JWT_SECRET_KEY,{expiresIn:"30d"});
    }
    catch(error)
    {
        console.error(error);
    }

};

const RegisteredUsers = new mongoose.model('RegisteredUser',RegisteredUsersSchema);   //check the name with changes 
module.exports = RegisteredUsers;