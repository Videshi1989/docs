import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState('');
    const ADMINAPI = process.env.REACT_APP_ADMIN_URL;
    const USERAPI =  process.env.REACT_APP_USER_URL;    
    const[token,setToken] = useState(localStorage.getItem("token"));
   
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token');
    }
  
    const userAuthentication = async()=>{
        try
        {
            const response = await fetch(`${USERAPI}/user`,{
                method:"GET",
                headers:{Authorization:`Bearer ${token}`}
            });
            if(response.ok)
            {
                const data = await response.json();
                setUser(data.userData);
                //console.log("logged in user data:",data.userData);
                //return data.userData;
            }
            
        }
        catch(error)
        {

        }
    };

    useEffect(()=>{
        userAuthentication();
    },[]);
    
    
   
    const storeTokenInLS = (serverToken)=>{ 
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }
    let isLoggedIn = !! token;   //if value of token is exist then the value of isLoggedIn is true otherwise false
    const authorizationToken = `Bearer ${token}`;
    return  <AuthContext.Provider value={{ userAuthentication,isLoggedIn, user, storeTokenInLS, LogoutUser, authorizationToken, USERAPI, ADMINAPI  }}>
                {children}
            </AuthContext.Provider>

            
};

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue)
    {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}
