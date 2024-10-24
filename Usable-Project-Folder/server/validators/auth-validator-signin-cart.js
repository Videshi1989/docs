const{z} = require("zod");

const signinSchema = z
    .object({
    
    emailsignincart: z.string({required_error:"Email is required !"})
            .trim().email({message:"Please enter valid email !"})
            .min(1,{message:"Please enter your email address !"})
            .max(250,{message:"Maximum length of email is 250 characters !"}),

   passwordsignincart: z.string({required_error:"Password is required !"})
              .trim().min(1,{message:"Please enter password !"})
              .max(250,{message:"Maximum length of password is 250 characters !"})
          
              
    });

    module.exports = signinSchema ;