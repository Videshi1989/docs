const express = require("express");
const app = express();
const path = require("path");   //for display image in front end
require("dotenv").config();

const cors = require("cors");
const corsOptions = { 
    origin: process.env.FRONT_END_URL, 
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD", 
    credentials: true 
}; 
app.use(cors(corsOptions));

const router = require("./router/auth-router.js");
const adminRoute = require("./router/admin-router.js");
const connectDb = require("./utils/db.js");

app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));  //for display image in front end where uploads is folder name should be located in root location 
app.use("/api/auth",router);
//app.use("/api/form",contactRoute); 
app.use("/api/admin",adminRoute);

const PORT = 5000;
connectDb().then(()=>{                             
    app.listen(PORT,()=>{
        console.log(`server is running at PORT:${PORT}`);
    });
}).catch((error)=>{alert(error)});

