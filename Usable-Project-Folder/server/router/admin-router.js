const express = require('express');
const adminController = require('../controllers/admin-controller.js');
const authMiddleware = require("../middlewares/auth-middleware.js"); 

const router = express.Router();

router.route('/filtercontactedusersbydate').post(adminController.filterContactedUsersByDate);
router.route('/filterregisteredusersbydate').post(adminController.filterRegisteredUsersByDate);
router.route('/filtercategorybydate').post(adminController.filterCategoryByDate);
router.route('/filtersubcategorybydate').post(adminController.filterSubCategoryByDate);
router.route('/filterchildcategorybydate').post(adminController.filterChildCategoryByDate);
router.route('/filtersubchildcategorybydate').post(adminController.filterSubChildCategoryByDate);
router.route('/singleproductimage').post(adminController.uploadSingleImage);
router.route('/multipleproductimage').post(adminController.uploadMultipleImage);
router.route('/getadmindetails/:id').get(adminController.getAdminDetails);
router.route('/getsinglecontacteduser/:id').get(adminController.getSingleContactedUser);
router.route('/getsingleuser/:id').get(adminController.getSingleUser);
router.route('/getsinglecategory/:id').get(adminController.getSingleCategory);
router.route('/getsinglesubcategory/:id').get(adminController.getSingleSubCategory);
router.route('/getsinglechildcategory/:id').get(adminController.getSingleChildCategory);
router.route('/getsinglesubchildcategory/:id').get(adminController.getSingleSubChildCategory);
router.route('/getmultiimages/:id').get(adminController.getMultiImages);
router.route('/getedituser/:id').patch(adminController.getUpdateUser);  //to update we will use patch
router.route('/geteditsubadmin/:id').patch(adminController.getUpdateSubadmin); 
router.route('/geteditcategory/:id').patch(adminController.getUpdateCategory);
router.route('/geteditsubcategory/:id').patch(adminController.getUpdateSubCategory);
router.route('/geteditchildcategory/:id').patch(adminController.getUpdateChildCategory);
router.route('/geteditsubchildcategory/:id').patch(adminController.getUpdateSubChildCategory);
router.route('/geteditadminpassword/:id').patch(adminController.getUpdateAdminPassword);  //to update we will use patch
router.route('/geteditadminprofile/:id').patch(adminController.getUpdateAdminProfile);
router.route('/deletecontactrecord/:id').delete(adminController.getDeleteContactedUser);
router.route('/deleterecord/:id').delete(adminController.getDeleteUser);
router.route('/deletesubadmin/:id').delete(adminController.getDeleteSubAdmin);
router.route('/deletecategory/:id').delete(adminController.getDeleteCategory);
router.route('/deletesubcategory/:id').delete(adminController.getDeleteSubCategory);
router.route('/deletechildcategory/:id').delete(adminController.getDeleteChildCategory);
router.route('/deletesubchildcategory/:id').delete(adminController.getDeleteSubChildCategory);
router.route('/deletemultiimage/:id').delete(adminController.getDeleteMultiImage);
router.route('/createsubadmin').post(adminController.createSubAdmin);
router.route('/createcategory').post(adminController.createCategory);
router.route('/createsubcategory').post(adminController.createSubCategory);
router.route('/createchildcategory').post(adminController.createChildCategory);
router.route('/createsubchildcategory').post(adminController.createSubChildCategory);
//router.route('/getadmindata').get(adminController.getAdminData);
router.route('/getallcategory').get(adminController.getAllCategory);
router.route('/getallcategoryaccordingstatus').get(adminController.getAllCategoryAccordingStatus);
router.route('/getallsubcategory').get(adminController.getAllSubCategory);
router.route('/getallsubcategorybycategoryid/:id').get(adminController.getAllSubCategoryByCategoryid);
router.route('/getallchildcategorybysubcategoryid/:id').get(adminController.getAllChildCategoryBySubCategoryid);//
router.route('/getallchildcategory').get(adminController.getAllChildCategory);
router.route('/getallsubchildcategory').get(adminController.getAllSubChildCategory);
router.route('/registeredusers').get(adminController.getAllRegisteredusers);    //press ctrl + space for auto suggestion
router.route('/subadminlist').get(adminController.getAllSubAdminList); 
router.route('/contectedusers').get(adminController.getAllContectedusers); 

module.exports = router;
