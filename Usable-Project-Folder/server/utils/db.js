const mongoose = require("mongoose");

//const URI="mongodb+srv://<username>:<password>@cluster0.x0t62yw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
const URI = process.env.MONGODB_URI;
const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Database connected")
    }
    catch(error)
    {
        console.error("database connection failed " + error);
        process.exit(0);
    }
}

module.exports = connectDb;
