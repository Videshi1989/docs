var validator = require("email-validator"); 
const bcrypt = require("bcryptjs");    // To bcrypt password 
const nodemailer = require('nodemailer');

const RegisteredUsers = require("../models/registeredusers-model.js");
//const ContactUser = require("../models/contact-model.js");
const ContactUs = require("../models/contactus-model.js");

const home = async (req, res) => {
    try {
        res.status(200).send('welcome to mern series using Routers home');
    }
    catch (error) {
        console.log(error);
    }

}

const contactus = async (req, res) => {     //for postman
    try 
    {
        //console.log(req.body)
        const { contactname, contactemail, contactmobileno, contactmsg } = req.body;
        const contactdata = { contactname, contactemail, contactmobileno, contactmsg };
        if(contactname === "" || contactname === null)
        {
            res.status(401).json({ msg: "Please enter full name !" });
            return;
        }
        else if(contactemail === "" || contactemail === null)
        {
            res.status(401).json({ msg: "Please enter email !" });
            return;
        }
        else if(!validator.validate(contactemail))
        {
            return res.status(401).json({msg:"Please enter valid email !"})
        }
        else if(contactmobileno === "" || contactmobileno === null)
        {
            res.status(401).json({ msg: "Please enter mobile number !" });
            return;
        }
        else if(isNaN(contactmobileno))
        {
            res.status(401).json({ msg: "Mobile number must be digits only !" });
            return;
        }
        else if(contactmobileno.toString().length !== 10 )
        {
            res.status(401).json({ msg: "Please enter 10 digit mobile number !" });
            return;
        }
        else if(contactmsg === "" || contactmsg === null)
        {
            res.status(401).json({ msg: "Please type your message !" });
            return;
        }
        else
        {
            const contactuserCreated = await ContactUs.create(contactdata);
            if(contactuserCreated)
            {
                res.status(202).json({ msg: "Thank you for contacting us !" });
            }
            else
            {
                res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
            }
        }
        
    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}



const register = async (req, res) => {     //for postman
    try 
    {
       
        const { fullname, email, mobileno, password, cnfpassword } = req.body;
        if(password != cnfpassword)
        {
            res.status(401).json({ msg: "Password and confirm password did not match !" });
            return;
        }
        else
        {
            const userexist = await RegisteredUsers.findOne({ email: email });
            const mobilenoexist = await RegisteredUsers.findOne({ mobileno: mobileno });
            if (userexist) 
            {
                res.status(401).json({ msg: "Email already exist !" });
                return;
            }
            else if (mobilenoexist) 
            {
                res.status(401).json({ msg: "Mobile number already exist !" });
                return;
            }
            else 
            {
                const saltround = 10;
                const has_pwd = await bcrypt.hash(password, saltround);
                const data = { fullname: fullname, email: email, mobileno: mobileno, password: has_pwd };
                
                /* for without token */
                //const userCreated = await RegisteredUsers.create(data).then((result) => {res.status(202).json({ msg: "Registration Successful"  })}).catch((error) => { res.status(400).json({ msg: "Registration Failed" })});
                 /* for without token */
    
            
                /* to generate token */
                const userCreated = await RegisteredUsers.create(data);
                if(userCreated)
                {
                    /* //enable for sending email
                    
                        const transporter = nodemailer.createTransport({
                        service: process.env.SERVICE_NAME,                   //sender service name
                        host: process.env.HOST_NAME,            //sender host name
                        port: 587,
                        secure: false, // Use `true` for port 465, `false` for all other ports
                        auth: {
                          user: process.env.EMAIL_ID,      //sender email address
                          pass: process.env.EMAIL_PASS,    //this is app password of email account
                        },
                      });

                      
                    const info = await transporter.sendMail({
                        from: "videshi",
                        to: "videshi.muduli1989@gmail.com", // list of receivers
                        subject: "Test", // Subject line
                        text: "Hello world?", // plain text body
                        html: "<b>This is test message</b>", 
                    });
                    console.log("Message sent: %s", info);
                    console.log("Message sent: %s", info.messageId);  */
        

                    res.status(202).json({ msg: "You have successfully registered.",getdata: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString() });
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
                /* to generate token */
    
            }
        }
     

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const registercart = async (req, res) => {     //for postman
    try 
    {
        const { fullnamecart, emailcart, mobilenocart, passwordcart, cnfpasswordcart } = req.body;
        if(passwordcart != cnfpasswordcart)
        {
            res.status(401).json({ msg: "Password and confirm password did not match !" });
            return;
        }
        else
        {
            const userexist = await RegisteredUsers.findOne({ email: emailcart });
            if (userexist) 
            {
                res.status(401).json({ msg: "Email already exist !" });
                return;
            }
            else 
            {
                const saltround = 10;
                const has_pwd = await bcrypt.hash(passwordcart, saltround);
                const data = { fullname: fullnamecart, email: emailcart, mobileno: mobilenocart, password: has_pwd };
                
                /* for without token */
                //const userCreated = await RegisteredUsers.create(data).then((result) => {res.status(202).json({ msg: "Registration Successful"  })}).catch((error) => { res.status(400).json({ msg: "Registration Failed" })});
                 /* for without token */
    
            
                /* to generate token */
                const userCreated = await RegisteredUsers.create(data);
                if(userCreated)
                {
                    res.status(202).json({ msg: "You have successfully registered.",getdata: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString() });
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
                /* to generate token */
    
            }
        }
     

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const login = async (req, res) => {
    try 
    {
        const { emailsignin, passwordsignin } = req.body;
        const userExist = await RegisteredUsers.findOne({ email:emailsignin });
       // console.log("emaildata",userExist);
        if(!userExist) 
        {
            res.status(401).json({ msg: "Email does not exist !" });
            return;
        }
        else if(userExist.status === 'disable') 
        {
            res.status(401).json({ msg: "Your account has been disabled by Admin !" });
            return;
        }
        else 
        {
            const checkpassword = await bcrypt.compare(passwordsignin, userExist.password);
            if(checkpassword) 
            {
                res.status(200).json({msg: "You have successfully loggedin.",token: await userExist.generateToken(),userId: userExist._id.toString(),isAdmin: userExist.isAdmin });
            }
            else 
            {
                res.status(401).json({ msg: "Password does not exist !" });
            }
        }

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }
}

const logincart = async (req, res) => {
    try 
    {
        const { emailsignincart, passwordsignincart } = req.body;
        const userExist = await RegisteredUsers.findOne({ email:emailsignincart });
        //console.log("emaildata",userExist);
        if (!userExist) 
        {
            res.status(401).json({ msg: "Email does not exist !" });
            return;
        }
        else if(userExist.status === 'disable') 
        {
            res.status(401).json({ msg: "Your account has been disabled by Admin !" });
            return;
        }
        else 
        {
            const checkpassword = await bcrypt.compare(passwordsignincart, userExist.password);
            if(checkpassword) 
            {
                res.status(200).json({msg: "You have successfully loggedin.",token: await userExist.generateToken(),userId: userExist._id.toString(),isAdmin: userExist.isAdmin });
            }
            else 
            {
                res.status(401).json({ msg: "Password does not exist !" });
            }
        }

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }
}

const user = async (req,res)=>{
    try{
        const userData = req.user;
        //console.log("inside authcontroller:",userData);
        return res.status(200).json({userData});
    }
    catch(error)
    {
        console.log(`Error from the root: ${error}`);
    }
}





module.exports = { home, register, registercart, login, logincart, user, contactus}
