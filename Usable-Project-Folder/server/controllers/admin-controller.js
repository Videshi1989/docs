
var validator = require("email-validator");    //npm i email-validator than use
const RegisteredUsers = require("../models/registeredusers-model");
const ContactUs = require("../models/contactus-model");
const Category = require("../models/category-model");
const SubCategory = require("../models/subcategory-model");
const ChildCategory = require("../models/childcategory-model");
const SubChildCategory = require("../models/subchildcategory-model");
const MultiImages = require("../models/multiimages-model");
//const RegisteredUsers = require("../models/registeredusers-model");
const bcrypt = require("bcryptjs");    // To bcrypt password 
const uploadSingle = require("../middlewares/upload")  //to upload file
const uploadMultipe = require("../middlewares/uploadMultiple")  //to upload multiple file
//require("dotenv").config();



const uploadSingleImage = async (req, res) => {
    uploadSingle(req, res, (err) => {
        if(err) 
        {
            //res.status(400).json({ msg: err });
            res.status(400).json({ imagesrc: '', imagename: '', imagestatus: 'selected', imagesize:"exceed", imageext: '' });
        } 
        else 
        {
            if (req.file == undefined) 
            { 
                res.status(400).json({ imagesrc: '', imagename: '', imagestatus: 'notselected', imagesize:'', imageext:'' });
            } 
            else 
            {
                const{path,filename} = req.file
                const extension = filename.split('.').pop();
                res.status(200).json({ imagesrc: path, imagename: filename, imagestatus: 'selected', imagesize:req.file.size, imageext: extension  });
            }
        }
    });
    
};

const uploadMultipleImage = async (req, res) => {

    uploadMultipe(req, res, (err) => {
            if(err) 
            {
                res.status(400).json({ imagestatus: 'selected', imagesize:err.code, imagelength:'' });
            }
            else 
            {
                if (req.files.length === 0) 
                { 
                    res.status(400).json({ imagestatus: 'notselected', imagesize:'', imagelength:0 });
                } 
                else 
                {
                    res.status(200).json({ files: req.files.map(file => file), imagestatus: 'selected', imagesize:req.files.size, imagelength: req.files.length});
                }
            }
    
    });
};

const getAllRegisteredusers = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        //const users = await RegisteredUsers.find()
      
      
        const users = await RegisteredUsers.find({ isAdmin : { $eq : false } })
        //console.log(users);
        if(!users || users.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(users);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getAllSubAdminList = async (req,res)=>{
   
    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        //const users = await RegisteredUsers.find()
      
      
        const users = await RegisteredUsers.find({ $and:[{ isAdmin : { $eq : true } },{ usertype : { $eq : 'subadmin' } }] })
        //console.log(users);
        if(!users || users.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(users);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getAllContectedusers = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const contactedusers = await ContactUs.find()
        //console.log(users);
        if(!contactedusers || contactedusers.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(contactedusers);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getAllCategory = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const category = await Category.find();
        //console.log(category);
        if(!category || category.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(category);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getAllCategoryAccordingStatus = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const category = await Category.find({status:'enable'});
        //console.log(category);
        if(!category || category.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(category);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};


const filterRegisteredUsersByDate = async (req,res)=>{
    
    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {   
            const filtereddata = await RegisteredUsers.find(
                                {
                                    $and: [{ isAdmin: false },{ created_date: { $gte: fromDate,$lt: toDate + 1 }}]
                                }
                                )                                
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:'Server error'})
    }




};

const filterContactedUsersByDate = async (req,res)=>{
    
    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {   
           const filtereddata = await ContactUs.find({
                                                created_date: {
                                                                $gte: fromDate,
                                                                $lt: toDate + 1
                                                            }
                                        })
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:'Server error'})
    }




};

const filterCategoryByDate = async (req,res)=>{

    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {
            const filtereddata = await Category.find({
                                                created_date: {
                                                                $gte: fromDate,
                                                                $lt: toDate + 1
                                                            }
                                        })
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:"Server error!"})
    }




};

const filterSubCategoryByDate = async (req,res)=>{

    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {
            const filtereddata = await SubCategory.find({
                                                created_date: {
                                                                $gte: fromDate,
                                                                $lt: toDate + 1
                                                            }
                                        })
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:"Server error!"})
    }




};

const filterChildCategoryByDate = async (req,res)=>{

    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {
            const filtereddata = await ChildCategory.find({
                                                created_date: {
                                                                $gte: fromDate,
                                                                $lt: toDate + 1
                                                            }
                                        })
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:"Server error!"})
    }




};

const filterSubChildCategoryByDate = async (req,res)=>{

    const{fromDate,toDate} = req.body;
    try
    {  
        if(fromDate === '' || fromDate === null)
        {
            return res.status(401).json({msg:"Please select from date !"})
        }
        else if(toDate === '' || toDate === null)
        {
            return res.status(401).json({msg:"Please select to date !"})
        }
        else
        {
            const filtereddata = await SubChildCategory.find({
                                                created_date: {
                                                                $gte: fromDate,
                                                                $lt: toDate + 1
                                                            }
                                        })
        
            return res.json(filtereddata);
        }

    }
    catch(error)
    {
       res.status(401).json({msg:"Server error!"})
    }




};

const getAllSubCategory = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const subcategory = await SubCategory.find();
        //console.log(subcategory);
        if(!subcategory || subcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(subcategory);
        }
       
    }
    catch(error)
    {
        next(error);
    }

};

const getAllSubCategoryByCategoryid = async (req,res)=>{

    const id = req.params.id;

    try{
        //const users = await User.find({},{password:0}); //it will not fetch password colom
        //const subcategory = await SubCategory.find({categoryid:id});
        const subcategory = await SubCategory.find({$and:[ {categoryid:id},{status:'enable'} ]});
        //console.log(subcategory);
        if(!subcategory || subcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(subcategory);
        }
       
    }
    catch(error)
    {
        next(error);
    }

};

const getAllChildCategoryBySubCategoryid = async (req,res)=>{

    const id = req.params.id;

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        //const childcategory = await ChildCategory.find({subcategoryid:id});
        const childcategory = await ChildCategory.find({$and:[{subcategoryid:id},{status:'enable'}]});
        //console.log(childcategory);
        if(!childcategory || childcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(childcategory);
        }
       
    }
    catch(error)
    {
        next(error);
    }

};

const getAllChildCategory = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const childcategory = await ChildCategory.find();
       // console.log(childcategory);
        if(!childcategory || childcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(childcategory);
        }
       
    }
    catch(error)
    {
        next(error);
    }

};

const getAllSubChildCategory = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const subchildcategory = await SubChildCategory.find();
        //console.log(subchildcategory);
        if(!subchildcategory || subchildcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(subchildcategory);
        }
       
    }
    catch(error)
    {
        next(error);
    }

};

const getMultiImages = async (req,res)=>{

    try{
        const id = req.params.id;
        const multiimagesdata = await MultiImages.find({subchildcategoryid:id});  //it will not fetch password colom
        
        if(!multiimagesdata || multiimagesdata.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(multiimagesdata);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};


const getSingleUser = async (req,res)=>{

    try{
        const id = req.params.id;
        const singleuser = await RegisteredUsers.findOne({_id:id},{password:0});  //it will not fetch password colom
       // console.log(singleuser);
        if(!singleuser || singleuser.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(singleuser);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getSingleContactedUser = async (req,res)=>{

    try{
        const id = req.params.id;
        const singlecontecteduser = await ContactUs.findOne({_id:id});  //it will not fetch password colom
       // console.log(singleuser);
        if(!singlecontecteduser || singlecontecteduser.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(singlecontecteduser);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getAdminDetails = async (req,res)=>{

    try{
        const id = req.params.id;
        const data = await RegisteredUsers.findOne({_id:id});  
        //console.log(data);
        if(!data || data.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(data);
        }
        
    }
    catch(error)
    {
        next(error);
    }

}

/*const getAdminData = async (req,res)=>{

    try{
        //const users = await RegisteredUsers.find({},{password:0}); //it will not fetch password colom
        const admindata = await User.findOne({isAdmin:true})
        //console.log(category);
        if(!admindata || admindata.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(admindata);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};*/

const getSingleCategory = async (req,res)=>{

    try{
        const id = req.params.id;
        const singlecategory = await Category.findOne({_id:id});  //it will not fetch password colom
        //console.log(singlecategory);
        if(!singlecategory || singlecategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
            return res.status(200).json(singlecategory);
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getSingleSubCategory = async (req,res)=>{

    try{
        const id = req.params.id;
        const singlesubcategory = await SubCategory.findOne({_id:id});  //it will not fetch password colom
        //console.log(singlesubcategory);
        if(!singlesubcategory || singlesubcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
           return res.status(200).json(singlesubcategory);
           
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getSingleChildCategory = async (req,res)=>{

    try{
        const id = req.params.id;
        const singlechildcategory = await ChildCategory.findOne({_id:id});  //it will not fetch password colom
        //console.log(singlechildcategory);
        if(!singlechildcategory || singlechildcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
           return res.status(200).json(singlechildcategory);
           
        }
        
    }
    catch(error)
    {
        next(error);
    }

};

const getSingleSubChildCategory = async (req,res)=>{

    try{
        const id = req.params.id;
        const singlesubchildcategory = await SubChildCategory.findOne({_id:id});  //it will not fetch password colom
        //console.log(singlesubchildcategory);
        if(!singlesubchildcategory || singlesubchildcategory.length===0)
        {
            res.status(404).json({msg:"No record found!"});
            return;
        }
        else
        {
           return res.status(200).json(singlesubchildcategory);
           
        }
        
    }
    catch(error)
    {
        next(error);
    }

};


const getUpdateUser = async (req,res)=>{

    try
    {

        const id = req.params.id;
        const updatedUserData = req.body;
        const{fullname,email,mobileno,usertype,status} = req.body;
      
        if(fullname === '' || fullname === null)
        {
            return res.status(401).json({msg:"Please enter full name !"})
        }
        else if(email === '' || email === null)
        {
            return res.status(401).json({msg:"Please enter email !"})
        }
        else if(!validator.validate(email))
        {
            return res.status(401).json({msg:"Please enter valid email !"})
        }
        else if(mobileno === '' || mobileno === null)
        {
            return res.status(401).json({msg:"Please enter mobile number !"})
        }
        else if(!Number(mobileno))
        {
            return res.status(401).json({msg:"Mobile number must be digits only !"})
        }
        else if(mobileno.toString().length !== 10 )
        {
           return res.status(401).json({msg:"Please enter 10 digit mobile number !"});
        }
        else if(usertype === '' || usertype === null)
        {
            return res.status(401).json({msg:"Please select user type !"})
        }
        else if(status === '' || status === null)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else
        {
            const chkexistingemail = await RegisteredUsers.findOne({$and:[{email:email},{_id: { $ne: id }}]});
            const chkexistingmobileno = await RegisteredUsers.findOne({$and:[{mobileno:mobileno},{_id: { $ne: id }}]});

            if(chkexistingemail)
            {
                return res.status(401).json({msg:'Email already exist !'});
            }
            else if(chkexistingmobileno)
            {
                return res.status(401).json({msg:'Mobile number already exist !'});
            }
            else
            {
                let updatedData = '';
                if(usertype === 'user')
                {
                    updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:{fullname:fullname,email:email,mobileno:mobileno,usertype:usertype,status:status,isAdmin:false} });
                }
                else if(usertype === 'subadmin')
                {
                    updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:{fullname:fullname,email:email,mobileno:mobileno,usertype:usertype,status:status,isAdmin:true} });
                }
                //const updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:updatedUserData });
            
                if(updatedData)
                {
                    return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
            }
            
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateSubadmin = async (req,res)=>{

    try
    {

        const id = req.params.id;
        const updatedUserData = req.body;
        const{fullname,email,mobileno,usertype,status} = req.body;
      
        if(fullname === '' || fullname === null)
        {
            return res.status(401).json({msg:"Please enter full name !"})
        }
        else if(email === '' || email === null)
        {
            return res.status(401).json({msg:"Please enter email !"})
        }
        else if(!validator.validate(email))
        {
            return res.status(401).json({msg:"Please enter valid email !"})
        }
        else if(mobileno === '' || mobileno === null)
        {
            return res.status(401).json({msg:"Please enter mobile number !"})
        }
        else if(!Number(mobileno))
        {
            return res.status(401).json({msg:"Mobile number must be digits only !"})
        }
        else if(mobileno.toString().length !== 10 )
        {
           return res.status(401).json({msg:"Please enter 10 digit mobile number !"});
        }
        else if(usertype === '' || usertype === null)
        {
            return res.status(401).json({msg:"Please select user type !"})
        }
        else if(status === '' || status === null)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else
        {
            const chkexistingemail = await RegisteredUsers.findOne({$and:[{email:email},{_id: { $ne: id }}]});
            const chkexistingmobileno = await RegisteredUsers.findOne({$and:[{mobileno:mobileno},{_id: { $ne: id }}]});

            if(chkexistingemail)
            {
                return res.status(401).json({msg:'Email already exist !'});
            }
            else if(chkexistingmobileno)
            {
                return res.status(401).json({msg:'Mobile number already exist !'});
            }
            else
            {
                let updatedData = '';
                if(usertype === 'user')
                {
                    updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:{fullname:fullname,email:email,mobileno:mobileno,usertype:usertype,status:status,isAdmin:false} });
                }
                else if(usertype === 'subadmin')
                {
                    updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:{fullname:fullname,email:email,mobileno:mobileno,usertype:usertype,status:status,isAdmin:true} });
                }
                //const updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:updatedUserData });
                
                if(updatedData)
                {
                    return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
            }

    
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateCategory = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const{categoryname,status, imagesrc, imagename, imageext, imagestatus, imagesize} = req.body;
        const updatedUserData = req.body;
        //console.log("updatedUserData",updatedUserData);
      
        if(categoryname === '' || categoryname === null)
        {
            return res.status(401).json({msg:"Please enter category name !"})
        }
        else if(status === '' || status === null || status === undefined)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const updatedData = await Category.updateOne({ _id:id },{ $set:{categoryname:categoryname, imagesrc: imagesrc, imagename: imagename, status:status} });
                if(updatedData)
                {
                    return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
                    
            } 
        }
        else 
        {
            const updatedData = await Category.updateOne({ _id:id },{ $set:{categoryname:categoryname, status:status} });
            if(updatedData)
            {
                return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
            }
            else
            {
                return res.status(401).json({msg:process.env.ERROR_MESSAGE})
            }
            
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};
const getUpdateSubCategory = async (req,res)=>{

    try
    {

        const id = req.params.id;
        //const updatedUserData = req.body;
        const{categoryid,subcategoryname, imagesrc, imagename, imageext, imagestatus, imagesize, status} = req.body;
      
        if(categoryid === '' || categoryid === null)
        {
            return res.status(401).json({msg:"Please select category !"})
        }
        else if(subcategoryname === '' || subcategoryname === null)
        {
            return res.status(401).json({msg:"Please enter sub-category name !"})
        }
        else if(status === '' || status === null || status === undefined)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const updatedData = await SubCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryname:subcategoryname, imagesrc: imagesrc, imagename: imagename, status:status} });
                if(updatedData)
                {
                    return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
            }
        }
        else
        {
            const updatedData = await SubCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryname:subcategoryname, status:status} });
            if(updatedData)
            {
                return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
            }
            else
            {
                return res.status(401).json({msg:process.env.ERROR_MESSAGE})
            }
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateChildCategory = async (req,res)=>{

    try
    {

        const id = req.params.id;
        //const updatedUserData = req.body;
        //console.log("edited-data",updatedUserData)
        const{categoryid,subcategoryid,childcategoryname, imagesrc, imagename, imageext, imagestatus, imagesize, status} = req.body;
      
        if(categoryid === '' || categoryid === null)
        {
            return res.status(401).json({msg:"Please select category !"})
        }
        else if(subcategoryid === '' || subcategoryid === null || subcategoryid === undefined)
        {
            return res.status(401).json({msg:"Please select sub-category !"})
        }
        else if(childcategoryname === '' || childcategoryname === null)
        {
            return res.status(401).json({msg:"Please enter child-category name !"})
        }
        else if(status === '' || status === null || status === undefined)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const updatedData = await ChildCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryid:subcategoryid,childcategoryname:childcategoryname,imagesrc: imagesrc, imagename: imagename,status:status} });
                if(updatedData)
                {
                    return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
            }
        }
        else
        {
            const updatedData = await ChildCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryid:subcategoryid,childcategoryname:childcategoryname,status:status} });
            if(updatedData)
            {
                return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
            }
            else
            {
                return res.status(401).json({msg:process.env.ERROR_MESSAGE})
            }
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateSubChildCategory = async (req,res)=>{

    try
    {

        const id = req.params.id;
        const{categoryid,subcategoryid,childcategoryid,subchildcategoryname,imagestatus, imagesize,status} = req.body;
      
        if(categoryid === '' || categoryid === null)
        {
            return res.status(401).json({msg:"Please select category !"})
        }
        else if(subcategoryid === '' || subcategoryid === null || subcategoryid === undefined)
        {
            return res.status(401).json({msg:"Please select sub-category !"})
        }
        else if(childcategoryid === '' || childcategoryid === null || childcategoryid === undefined)
        {
            return res.status(401).json({msg:"Please select child-category !"})
        }
        else if(subchildcategoryname === '' || subchildcategoryname === null)
        {
            return res.status(401).json({msg:"Please enter subchild-category name !"})
        }
        else if(status === '' || status === null || status === undefined)
        {
            return res.status(401).json({msg:"Please select status !"})
        }
        else if(imagestatus === "selected")
            {
               
                if(imagesize === "LIMIT_FILE_SIZE")
                {
                    res.status(401).json({ msg: "Maximum file size is 512kb !" });
                    return;
                }
                else if(imagesize === "LIMIT_UNEXPECTED_FILE")
                {
                    res.status(401).json({ msg: "Please upload maximum 10 files !" });
                    return;
                }
                else
                {
                    const updatedData = await SubChildCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryid:subcategoryid,childcategoryid:childcategoryid,subchildcategoryname:subchildcategoryname,status:status} });
                    if(updatedData)
                    {
                        for (let x in req.body.files) 
                        {
                            let getfilename = req.body.files[x].filename;
                            let getfilepath = req.body.files[x].path;
                            await MultiImages.create({ subchildcategoryid:id, imagesrc:getfilepath, imagename:getfilename });   
                        }
                        return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
                    }
                    else
                    {
                        return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                    }
                }
               
            }
        else
        {
            const updatedData = await SubChildCategory.updateOne({ _id:id },{ $set:{categoryid:categoryid,subcategoryid:subcategoryid,childcategoryid:childcategoryid,subchildcategoryname:subchildcategoryname,status:status} });
            if(updatedData)
            {
                return res.status(200).json({msg:process.env.SUCCESS_MSG_UPDATE})
            }
            else
            {
                return res.status(401).json({msg:process.env.ERROR_MESSAGE})
            }
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateAdminPassword = async (req,res)=>{

    try
    {

        const id = req.params.id;
        const updatedAdminData = req.body;
        const{oldpassword,newpassword,confirmnewpassword} = req.body;
      
        if(oldpassword === '' || oldpassword === null)
        {
            return res.status(401).json({msg:"Please enter old password !"})
        }
        else if(newpassword === '' || newpassword === null)
        {
            return res.status(401).json({msg:"Please enter new password !"})
        }
        else if(confirmnewpassword === '' || confirmnewpassword === null)
        {
            return res.status(401).json({msg:"Please enter confirm new password !"})
        }
        else if(newpassword !== confirmnewpassword)
        {
            return res.status(401).json({msg:"New password and confirm new password did not match !"})
        }
        else
        {
            const getUpdatedAdminData = await RegisteredUsers.findOne({ _id:id });
            const checkpassword = await bcrypt.compare(oldpassword, getUpdatedAdminData.password);
            //const getUpdatedAdminData = await RegisteredUsers.updateOne({ _id:id },{ $set:updatedUserData });
            
            if(checkpassword)
            {
                const saltround = 10;
                const has_pwd = await bcrypt.hash(newpassword, saltround);

                const UpdatedAdminpwd = await RegisteredUsers.updateOne({ _id:id },{ $set:{ password:has_pwd } });
                if(UpdatedAdminpwd)
                {
                    return res.status(200).json({msg:"Password has been successfully updated !"})
                    
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                }
                
            }
            else
            {
                return res.status(401).json({msg:"Please enter correct old password !"})
            }
        }
       
       
        //return res.status(200).json(updatedData);
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getUpdateAdminProfile = async (req,res)=>{

    try
    {

        const id = req.params.id;
        const updatedAdminData = req.body;
        const{fullname, email, mobileno,imagesrc, imagename, imageext, imagestatus, imagesize} = req.body;
      
        if(fullname === '' || fullname === null)
        {
            return res.status(401).json({msg:"Please enter full name !"})
        }
        else if(email === '' || email === null)
        {
            return res.status(401).json({msg:"Please enter email !"})
        }
        else if(!validator.validate(email))
        {
            res.status(401).json({msg:"Please enter valid email !"});
            return;
        }
        else if(mobileno === '' || mobileno === null)
        {
            res.status(401).json({msg:"Please enter mobile number !"});
            return;
        }
        else if(!Number(mobileno))
        {
            res.status(401).json({msg:"Mobile number must be digits only !"});
            return;
        }
        else if(mobileno.toString().length !== 10 )
        {
            res.status(401).json({msg:"Please enter 10 digit mobile number !"});
            return;
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const chkexistingemail = await RegisteredUsers.findOne({$and:[{email:email},{_id: { $ne: id }}]});
                const chkexistingmobileno = await RegisteredUsers.findOne({$and:[{mobileno:mobileno},{_id: { $ne: id }}]});

                if(chkexistingemail)
                {
                    return res.status(401).json({msg:'Email already exist !'});
                }
                else if(chkexistingmobileno)
                {
                    return res.status(401).json({msg:'Mobile number already exist !'});
                }
                else
                {
                    //const updatedData = await User.updateOne({ _id:id },{ $set:{fullname:fullname, email:email, mobileno:mobileno, imagesrc: imagesrc, imagename: imagename} });
                    const updatedData = await RegisteredUsers.findOneAndUpdate({ _id:id },{ $set:{fullname:fullname, email:email, mobileno:mobileno, imagesrc: imagesrc, imagename: imagename} },{ new: true, runValidators: true });
                    if(updatedData)
                    {
                        return res.status(200).json({msg:"Successfully updated your profile.", user: updatedData})
                    }
                    else
                    {
                        return res.status(401).json({msg:process.env.ERROR_MESSAGE})
                    }
                }
                
            } 
        }
        else 
        {
            const chkexistingemail = await RegisteredUsers.findOne({$and:[{email:email},{_id: { $ne: id }}]});
            const chkexistingmobileno = await RegisteredUsers.findOne({$and:[{mobileno:mobileno},{_id: { $ne: id }}]});

            if(chkexistingemail)
            {
                return res.status(401).json({msg:'Email already exist !'});
            }
            else if(chkexistingmobileno)
            {
                return res.status(401).json({msg:'Mobile number already exist !'});
            }
            else
            {
                //const updatedData = await RegisteredUsers.updateOne({ _id:id },{ $set:{fullname:fullname, email:email, mobileno:mobileno} },{ new: true, runValidators: true });
                const updatedData = await RegisteredUsers.findOneAndUpdate({ _id:id },{ $set:{fullname:fullname, email:email, mobileno:mobileno} },{ new: true, runValidators: true });
                /*const user = await RegisteredUsers.findById(id);
                user.fullname = fullname;
                user.email = email;
                user.mobileno = mobileno;
                const updateduser = await user.save();*/
                if(updatedData)
                {
                    return res.status(200).json({msg:"Successfully updated your profile.", user: updatedData})
                }
                else
                {
                    return res.status(401).json({msg:process.env.ERROR_MESSAGE});
                }
            }
           
                
        }
       
    }
    catch(error)
    {
       // next(error);
       res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }


};

const getDeleteUser = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await RegisteredUsers.deleteOne({ _id:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        res.status(401).json({msg:process.env.ERROR_MESSAGE})
    }



};

const getDeleteSubAdmin = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await RegisteredUsers.deleteOne({ _id:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        res.status(401).json({msg:process.env.ERROR_MESSAGE});
    }



};

const getDeleteContactedUser = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await ContactUs.deleteOne({ _id:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        res.status(401).json({msg:process.env.ERROR_MESSAGE});
    }



};

const getDeleteCategory = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deletedcategory = await Category.deleteOne({ _id:id });
        const deletedsubcategory = await SubCategory.deleteMany({ categoryid:id });
        const deletedchildcategory = await ChildCategory.deleteMany({ categoryid:id });
        const deletedsubchildcategory = await SubChildCategory.deleteMany({ categoryid:id });
        const deletedmultiimages = await MultiImages.deleteMany({ categoryid:id });
        if(deletedcategory)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }



};

const getDeleteSubCategory = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deletedsubcategory = await SubCategory.deleteOne({ _id:id });
        const deletedchildcategory = await ChildCategory.deleteMany({ subcategoryid:id });
        const deletedsubchildcategory = await SubChildCategory.deleteMany({ subcategoryid:id });
        const deletedmultiimages = await MultiImages.deleteMany({ subcategoryid:id });
        if(deletedsubcategory)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }



};

const getDeleteChildCategory = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await ChildCategory.deleteOne({ _id:id });
        const deletedsubchildcategory = await SubChildCategory.deleteMany({ childcategoryid:id });
        const deletedmultiimages = await MultiImages.deleteMany({ childcategoryid:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }



};

const getDeleteSubChildCategory = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await SubChildCategory.deleteOne({ _id:id });
        const deletedmutiimage = await MultiImages.deleteMany({ subchildcategoryid:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:process.env.SUCCESS_MSG_DELETE });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

};

const getDeleteMultiImage = async (req,res)=>{

    try
    {
        const id = req.params.id;
        const deleteddata = await MultiImages.deleteOne({ _id:id });
        if(deleteddata)
        {
            return res.status(200).json({ msg:"Successfully deleted image !" });
        }
        else
        {
            return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
        }
       
    }
    catch(error)
    {
        //next(error);
        return res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const createCategory = async (req, res) => {     //for postman
    try 
    {   
        const { categoryname, status, imagesrc, imagename, imageext, imagestatus, imagesize } = req.body;
        if(categoryname === "" || categoryname === null)
        {
            res.status(401).json({ msg: "Please enter category !" });
            return;
        }
        else if(status === "" || status === null)
        {
            res.status(401).json({ msg: "Please select status !" });
            return;
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const categoryexist = await Category.findOne({ categoryname: categoryname });
                if (categoryexist) 
                {
                    res.status(401).json({ msg: "Category already exist !" });
                    return;
                }
                else 
                {
                    const data = { categoryname: categoryname, imagesrc: imagesrc, imagename: imagename, status: status };
                    const categoryCreated = await Category.create(data);
                    if(categoryCreated)
                    {
                        res.status(202).json({ msg: process.env.SUCCESS_MSG_CREATE });
                        singleimagesrc="";
                        singleimagename="";
                    }
                    else
                    {
                        res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                    }
                 
                }
            } 
        }
        else
        {
            const categoryexist = await Category.findOne({ categoryname: categoryname });
            if(categoryexist) 
            {
                res.status(401).json({ msg: "Category already exist !" });
                return;
            }
            else 
            {
                const data = { categoryname: categoryname, imagesrc: imagesrc, imagename: imagename, status: status };
                const categoryCreated = await Category.create(data);
                if(categoryCreated)
                {
                    res.status(202).json({ msg: process.env.SUCCESS_MSG_CREATE });
                    singleimagesrc="";
                    singleimagename="";
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
             
            }
        } 
     
    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const createSubCategory = async (req, res) => {     //for postman
    try 
    {
        const { categoryid, subcategoryname, status, imagesrc, imagename, imageext, imagestatus, imagesize } = req.body;
        if(categoryid === "" || categoryid === null)
        {
            res.status(401).json({ msg: "Please select category !" });
            return;
        }
        else if(subcategoryname === "" || subcategoryname === null)
        {
            res.status(401).json({ msg: "Please enter subcategory !" });
            return;
        }
        else if(status === "" || status === null)
        {
            res.status(401).json({ msg: "Please select status !" });
            return;
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const subcategoryexist = await SubCategory.findOne({ subcategoryname: subcategoryname });
                if(subcategoryexist) 
                {
                    res.status(401).json({ msg: "Sub-category already exist !" });
                    return;
                }
                else 
                {
                   
                    const data = { categoryid: categoryid, subcategoryname:subcategoryname, imagesrc: imagesrc, imagename: imagename, status: status };
                  
                    const subcategoryCreated = await SubCategory.create(data);
                    if(subcategoryCreated)
                    {
                        res.status(202).json({ msg: process.env.SUCCESS_MSG_CREATE });
                    }
                    else
                    {
                        res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                    }
                 
                }
            }
        }
        else
        {
            const subcategoryexist = await SubCategory.findOne({ subcategoryname: subcategoryname });
            if(subcategoryexist) 
            {
                res.status(401).json({ msg: "Sub-category already exist !" });
                return;
            }
            else 
            {
               
                const data = { categoryid: categoryid, subcategoryname:subcategoryname,  status: status };
              
                const subcategoryCreated = await SubCategory.create(data);
                if(subcategoryCreated)
                {
                    res.status(202).json({ msg:process.env.SUCCESS_MSG_CREATE });
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
             
            }
        }
     

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const createChildCategory = async (req, res) => {     //for postman
    try 
    {
        const { categoryid,subcategoryid, childcategoryname, imagesrc, imagename, imageext, imagestatus, imagesize, status } = req.body;
        if(categoryid === "" || categoryid === null)
        {
            res.status(401).json({ msg: "Please select category !" });
            return;
        }
        else if(subcategoryid === "" || subcategoryid === null)
        {
            res.status(401).json({ msg: "Please select subcategory !" });
            return;
        }
        else if(childcategoryname === "" || childcategoryname === null)
        {
            res.status(401).json({ msg: "Please enter child-category !" });
            return;
        }
        else if(status === "" || status === null)
        {
            res.status(401).json({ msg: "Please select status !" });
            return;
        }
        else if(imagestatus === "selected")
        {
            if(imagesize === "exceed")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imageext !== 'png' && imageext !== 'jpg' && imageext !== 'jpeg' && imageext !== 'svg' && imageext !== 'gif')
            {
                res.status(401).json({ msg: "Please upload png,jpg,jpeg,svg and gif image only !" });
                return;
            }
            else
            {
                const childcategoryexist = await ChildCategory.findOne({ childcategoryname: childcategoryname });
                if(childcategoryexist) 
                {
                    res.status(401).json({ msg: "Child-category already exist !" });
                    return;
                }
                else 
                {
                   
                    const data = { categoryid: categoryid,subcategoryid: subcategoryid, childcategoryname:childcategoryname, imagesrc: imagesrc, imagename: imagename, status: status };
                  
                    const childcategoryCreated = await ChildCategory.create(data);
                    if(childcategoryCreated)
                    {
                        res.status(202).json({ msg:process.env.SUCCESS_MSG_CREATE });
                    }
                    else
                    {
                        res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                    }
                 
                }
            } 
        }
        else
        {
            const childcategoryexist = await ChildCategory.findOne({ childcategoryname: childcategoryname });
            if(childcategoryexist) 
            {
                res.status(401).json({ msg: "Child-category already exist !" });
                return;
            }
            else 
            {
               
                const data = { categoryid: categoryid,subcategoryid: subcategoryid, childcategoryname:childcategoryname,  status: status };
              
                const childcategoryCreated = await ChildCategory.create(data);
                if(childcategoryCreated)
                {
                    res.status(202).json({ msg:process.env.SUCCESS_MSG_CREATE });
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
             
            }
        }
     

    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const createSubChildCategory = async (req, res) => {     //for postman
   try 
    {
        const { categoryid,subcategoryid,childcategoryid, subchildcategoryname, imagestatus, imagesize, status } = req.body;
        if(categoryid === "" || categoryid === null)
        {
            res.status(401).json({ msg: "Please select category !" });
            return;
        }
        else if(subcategoryid === "" || subcategoryid === null)
        {
            res.status(401).json({ msg: "Please select sub-category !" });
            return;
        }
        else if(childcategoryid === "" || childcategoryid === null)
        {
            res.status(401).json({ msg: "Please select child-category !" });
            return;
        }
        else if(subchildcategoryname === "" || subchildcategoryname === null)
        {
            res.status(401).json({ msg: "Please enter subchild-category !" });
            return;
        }
        else if(status === "" || status === null)
        {
            res.status(401).json({ msg: "Please select status !" });
            return;
        }
        else if(imagestatus === "selected")
        {
           
            if(imagesize === "LIMIT_FILE_SIZE")
            {
                res.status(401).json({ msg: "Maximum file size is 512kb !" });
                return;
            }
            else if(imagesize === "LIMIT_UNEXPECTED_FILE")
            {
                res.status(401).json({ msg: "Please upload maximum 10 files !" });
                return;
            }
            else
            {
                const subchildcategoryexist = await SubChildCategory.findOne({ subchildcategoryname: subchildcategoryname });
                if(subchildcategoryexist) 
                {
                    res.status(401).json({ msg: "Subchild-category already exist !" });
                    return;
                }
                else 
                {
                    const data = { categoryid: categoryid,subcategoryid: subcategoryid,childcategoryid: childcategoryid, subchildcategoryname:subchildcategoryname,  status: status };
                      
                    const subchildcategoryCreated = await SubChildCategory.create(data);
                    if(subchildcategoryCreated)
                    {
                        for (let x in req.body.files) 
                        {
                            let getfilename = req.body.files[x].filename;
                            let getfilepath = req.body.files[x].path;
                            await MultiImages.create({ categoryid:subchildcategoryCreated.categoryid,subcategoryid:subchildcategoryCreated.subcategoryid,childcategoryid:subchildcategoryCreated.childcategoryid,subchildcategoryid:subchildcategoryCreated._id, imagesrc:getfilepath, imagename:getfilename });   
                        }
                        res.status(202).json({ msg:process.env.SUCCESS_MSG_CREATE });
                    }
                    else
                    {
                        res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                    }
                }
            }
           
        }
        else
        {
            const subchildcategoryexist = await SubChildCategory.findOne({ subchildcategoryname: subchildcategoryname });
            if(subchildcategoryexist) 
            {
                res.status(401).json({ msg: "Subchild-category already exist !" });
                return;
            }
            else 
            {
               
                const data = { categoryid: categoryid,subcategoryid: subcategoryid,childcategoryid: childcategoryid, subchildcategoryname:subchildcategoryname,  status: status };
              
                const subchildcategoryCreated = await SubChildCategory.create(data);
                if(subchildcategoryCreated)
                {
                    res.status(202).json({ msg:process.env.SUCCESS_MSG_CREATE });
                }
                else
                {
                    res.status(401).json({msg:process.env.ERROR_MESSAGE}); 
                }
             
            }
        }
    }
    catch (error) 
    {
        res.status(401).json({ msg:process.env.ERROR_MESSAGE });
    }

}

const createSubAdmin = async (req, res) => {     //for postman
    try 
    {
       
        const { fullname, email, mobileno, password, cnfpassword, usertype, status } = req.body;
        if(fullname === "" || fullname === null)
        {
            res.status(401).json({ msg: "Please enter full name !" });
            return;
        }
        else if(email === "" || email === null)
        {
            res.status(401).json({ msg: "Please enter email !" });
            return;
        }
        else if(!validator.validate(email))
        {
            res.status(401).json({msg:"Please enter valid email !"});
            return;
        }
        else if(mobileno === '' || mobileno === null)
        {
            res.status(401).json({msg:"Please enter mobile number !"});
            return;
        }
        else if(!Number(mobileno))
        {
            res.status(401).json({msg:"Mobile number must be digits only !"});
            return;
        }
        else if(mobileno.toString().length !== 10 )
        {
            res.status(401).json({msg:"Please enter 10 digit mobile number !"});
            return;
        }
        else if(password === "" || password === null)
        {
            res.status(401).json({ msg: "Please enter password !" });
            return;
        }
        else if(cnfpassword === "" || cnfpassword === null)
        {
            res.status(401).json({ msg: "Please enter confirm password !" });
            return;
        }
        else if(password != cnfpassword)
        {
            res.status(401).json({ msg: "Password and confirm password did not match !" });
            return;
        }
        else if(usertype === '' || usertype === null)
        {
            res.status(401).json({msg:"Please select user type !"});
            return;
        }
        else if(status === '' || status === null)
        {
           res.status(401).json({msg:"Please select status !"})
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
                let data='';
                if(usertype === 'user')
                {
                    data = { fullname: fullname, email: email, mobileno: mobileno, password: has_pwd, usertype:usertype, status:status, isAdmin:false };
                }
                else if(usertype === 'subadmin')
                {
                    data = { fullname: fullname, email: email, mobileno: mobileno, password: has_pwd, usertype:usertype, status:status, isAdmin:true };
                }
                
                
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
        

                    res.status(202).json({ msg: "Successfully created sub-admin !"});
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



module.exports = { 
                   getAllRegisteredusers, getSingleUser, getUpdateUser, getDeleteUser, 
                   getUpdateAdminPassword, createCategory, getAllCategory, getSingleCategory, 
                   getUpdateCategory, getDeleteCategory, createSubCategory, getAllSubCategory,
                   getSingleSubCategory,getDeleteSubCategory,getUpdateSubCategory,
                   getAllSubCategoryByCategoryid, createChildCategory, getAllChildCategory,
                   getSingleChildCategory, getDeleteChildCategory, getUpdateChildCategory,
                   getAllChildCategoryBySubCategoryid, createSubChildCategory, getAllSubChildCategory,
                   getSingleSubChildCategory, getUpdateSubChildCategory, getDeleteSubChildCategory,
                   uploadSingleImage,uploadMultipleImage,getMultiImages,getDeleteMultiImage,getAdminDetails,
                   filterCategoryByDate,filterSubCategoryByDate,filterChildCategoryByDate,filterSubChildCategoryByDate,
                   filterRegisteredUsersByDate,getAllContectedusers,getSingleContactedUser,filterContactedUsersByDate,
                   getDeleteContactedUser,getAllSubAdminList,getUpdateSubadmin,createSubAdmin,getDeleteSubAdmin,
                   getUpdateAdminProfile,getAllCategoryAccordingStatus
                  
                };