const jwt = require("jsonwebtoken");
const RegisteredUsers = require("../models/registeredusers-model");
const authMiddleware = async (req,res,next)=>{   //it iakes three parameter
    const token = req.header("Authorization");
    if(!token)
    {
        return res.status(401).json({message:"Unauthorized HTTP, Token not provided"});
    }
    else
    {
        const jwtToken = token.replace("Bearer","").trim();
        //console.log("token from auth middleware",jwtToken);
        try
        {
            const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
            //console.log(isVerified);
            const userData = await RegisteredUsers.findOne({email:isVerified.email}).select({password:0});
            //console.log(userData);
            req.user = userData;
            req.token = token;
            req.userID = userData._id;
            next();
        }
        catch(error)
        {
            return res.status(401).json({message:"Unauthorized , Invalid Token"});
        }
    }

};

module.exports = authMiddleware;
