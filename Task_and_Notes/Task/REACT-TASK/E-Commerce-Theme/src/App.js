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
import Dashboard from "./admincomponent/Dashboard";
import RegisteredUsers from "./admincomponent/RegisteredUsers";
import Fashion from "./admincomponent/Fashion";
import Profile from "./admincomponent/Profile";
import Changepasswordadmin from "./admincomponent/Changepasswordadmin";
import Reset from "./components/Reset";
import { Orderdetails } from "./usercomponents/Orderdetails";
import Invoicedetails from "./usercomponents/Invoicedetails";


function App() {

 

  return (
    <>
   
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
            <Route  path="/signin"      element={<Signin />}  />
            <Route  path="/placeorder"      element={<Placeorder />}  />
            <Route  path="/myorders"      element={<Myorders />}  />
            <Route  path="/mywishlist"      element={<Mywishlist />}  /> 
            <Route  path="/myprofile"      element={<Myprofile />}  />
            <Route  path="/manageaddress"      element={<Manageaddress />}  />
            <Route  path="/myreview"      element={<Myreview />}  />
            <Route  path="/forgot"      element={<Forgot />}  />
            <Route  path="/signup"      element={<Signup />}  />
            <Route  path="/changepassword"      element={<Changepassword />}  />
            <Route  path="/dashboard"      element={<Dashboard />}  />
            <Route  path="/registeredusers"      element={<RegisteredUsers />}  />
            <Route  path="/product"      element={<Product />}  />
            <Route  path="/fashion"      element={<Fashion />}  />
            <Route  path="/profile"      element={<Profile />}  />
            <Route  path="/changepasswordadmin"      element={<Changepasswordadmin />}  />   
            <Route  path="/reset"      element={<Reset />}  />
            <Route  path="/orderdetails"      element={<Orderdetails />}  />
            <Route  path="/invoicedetails"      element={<Invoicedetails />}  />
            
            <Route  path="*"          element={<Error />}  />
        </Routes>
      </BrowserRouter>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
