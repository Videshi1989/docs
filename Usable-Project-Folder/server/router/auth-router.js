const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controller.js");
const signupSchema = require("../validators/auth-validator-signup.js"); 
const signinSchema = require("../validators/auth-validator-signin.js");
const signinSchemacart = require("../validators/auth-validator-signin-cart.js"); 
const signupSchemacart = require("../validators/auth-validator-signup-cart.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js"); 

router.route("/home").get(authcontrollers.home);           
//router.route('/register').get(authcontrollers.register);
router.route('/register').post(validate(signupSchema),authcontrollers.register);      //for postman
router.route('/registercart').post(validate(signupSchemacart),authcontrollers.registercart);      //for postman
router.route('/login').post(validate(signinSchema),authcontrollers.login);
router.route('/logincart').post(validate(signinSchemacart),authcontrollers.logincart);
router.route("/user").get(authMiddleware,authcontrollers.user);
router.route('/contactus').post(authcontrollers.contactus); 


module.exports = router;
