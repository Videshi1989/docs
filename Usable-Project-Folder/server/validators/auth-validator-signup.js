const{z} = require("zod");

const signupSchema = z
    .object({
    
     fullname: z.string({require:"Name is required"})
               .trim()
               .min(1,{message:"Please enter your full name !"})
               .max(100,{message:"Maximum length of full name is 100 characters !"}),

    email: z.string({required_error:"Email is required"})
            .trim().email({message:"Please enter valid email !"})
            .min(1,{message:"Please enter valid email !"})
            .max(250,{message:"Maximum length of email is 250 characters !"}),

    mobileno: z.string({required_error:"Mobile no. is required"})
           .trim().min(10,{message:"Please enter 10 digit mobile number !"})
           .max(10,{message:"Please enter 10 digit mobile number !"}),

    otp: z.string({required_error:"OTP is required"})
           .trim().min(6,{message:"Please enter 6 digit OTP !"})
           .max(6,{message:"Please enter 6 digit OTP !"}),       

    password: z.string({required_error:"Password is required"})
              .trim().min(1,{message:"Please enter password !"})
              .max(250,{message:"Maximum length of password is 250 characters !"}),

    cnfpassword: z.string({required_error:"Confirm password is required"})
              .trim().min(1,{message:"Please enter confirm password !"})
              .max(250,{message:"Maximum length of confirm password is 250 characters !"})
          
              
    });




module.exports = signupSchema ;