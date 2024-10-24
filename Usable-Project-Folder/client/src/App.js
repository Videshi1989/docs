import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./admincomponent/Product";
import Contact from "./components/Contact";
import Allproductview1 from "./components/Allproductview1";
import Allproductview2 from "./components/Allproductview2";
import Error from "./components/Error";
import ScrollToTop from "react-scroll-to-top";
import Productdetails from "./components/Productdetails";
import Cartdetails from "./components/Cartdetails";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AdminLogout from "./admincomponent/AdminLogout";
import Signin from "./components/Signin";
import Placeorder from "./components/Placeorder";
import {Myorders } from "./usercomponents/Myorders";
import { Mywishlist } from "./usercomponents/Mywishlist";
import { Myprofile } from "./usercomponents/Myprofile";
import { Manageaddress } from "./usercomponents/Manageaddress";
import { Myreview } from "./usercomponents/Myreview";
import Forgot from "./components/Forgot";
import Signup from "./components/Signup";
import { Changepassword } from "./usercomponents/Changepassword";
import AdminDashboard from "./admincomponent/AdminDashboard";
import AdminRegisteredUsers from "./admincomponent/AdminRegisteredUsers";
import AdminContactUs from "./admincomponent/AdminContactUs";
import AdminSubAdminList from "./admincomponent/AdminSubAdminList"
import AdminCategory from "./admincomponent/AdminCategory";
import AdminSubCategory from "./admincomponent/AdminSubCategory";
import AdminChildCategory from "./admincomponent/AdminChildCategory";
import AdminSubChildCategory from "./admincomponent/AdminSubChildCategory";
import Test from "./admincomponent/Test";
import Fashion from "./admincomponent/Fashion";
import AdminProfile from "./admincomponent/AdminProfile";
import AdminChangepassword from "./admincomponent/AdminChangepassword";
import Reset from "./components/Reset";
import { Orderdetails } from "./usercomponents/Orderdetails";
import Invoicedetails from "./usercomponents/Invoicedetails";

import { AuthProvider } from './store/auth'
//import { useState } from "react";


function App() {
 
  //const[userData,setUserData] = useState([]);

  return (
    <>
    <AuthProvider>
     <BrowserRouter>
        <Routes>
            <Route  path=""      element={<Home />}  />
            <Route  path="/home"      element={<Home />}  />
            <Route  path="/about"      element={<About />}  />
            <Route  path="/contact"      element={<Contact />}  />
            <Route  path="/allproductview1"      element={<Allproductview1 />}  />
            <Route  path="/allproductview2"      element={<Allproductview2 />}  />
            <Route  path="/productdetails"      element={<Productdetails />}  />
            <Route  path="/cartdetails"      element={<Cartdetails />}  />
            <Route  path="/login"      element={<Login />}  />
            <Route  path="/logout"      element={<Logout />}  />
            <Route  path="/adminlogout"      element={<AdminLogout />}  />
            
            
            {/* {!userData ? ( <Route  path="/signin" setUserData={setUserData} element={<Signin />}  /> ) : (<Route  path="/signin"  userData={userData}   element={<Signin />}  />)} */}
            
            <Route  path="/signin"      element={<Signin />}  />
            
            <Route  path="/test"      element={<Test />}  />
            
            <Route  path="/placeorder"      element={<Placeorder />}  />
            <Route  path="/myorders"      element={<Myorders />}  />
            <Route  path="/mywishlist"      element={<Mywishlist />}  /> 
            <Route  path="/myprofile"      element={<Myprofile />}  />
            <Route  path="/manageaddress"      element={<Manageaddress />}  />
            <Route  path="/myreview"      element={<Myreview />}  />
            <Route  path="/forgot"      element={<Forgot />}  />
            <Route  path="/signup"      element={<Signup />}  />
            <Route  path="/changepassword"      element={<Changepassword />}  />
            <Route  path="/admindashboard"      element={<AdminDashboard />}  />
            <Route  path="/adminregisteredusers"      element={<AdminRegisteredUsers />}  /> 
            <Route  path="/product"      element={<Product />}  />
            <Route  path="/admincontactus"      element={<AdminContactUs />}  />
            <Route  path="/adminsubadminlist"      element={<AdminSubAdminList />}  />
            <Route  path="/admincategory"      element={<AdminCategory />}  />
            <Route  path="/adminsubcategory"      element={<AdminSubCategory />}  />
            <Route  path="/adminchildcategory"      element={<AdminChildCategory />}  />
            <Route  path="/adminsubchildcategory"      element={<AdminSubChildCategory />}  />
            <Route  path="/fashion"      element={<Fashion />}  />
            <Route  path="/adminprofile"      element={<AdminProfile />}  />
            <Route  path="/adminchangepassword"      element={<AdminChangepassword />}  />   
            <Route  path="/reset"      element={<Reset />}  />
            <Route  path="/orderdetails"      element={<Orderdetails />}  />
            <Route  path="/invoicedetails"      element={<Invoicedetails />}  />
           

            <Route  path="*"          element={<Error />}  />
        </Routes>
      </BrowserRouter>
      <ScrollToTop smooth />
      </AuthProvider>
    </>
  );
}

export default App;
