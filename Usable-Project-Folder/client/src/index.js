import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './store/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthProvider>
      <React.StrictMode>
         <App />
    </React.StrictMode>
    <ToastContainer />      
 </AuthProvider>
);



