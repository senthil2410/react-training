import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

    const AuthContext=createContext();

     export const useAuth=()=>useContext(AuthContext);

     export const AuthProvider=({children})=>
     {
        const[token,setToken]=useState(null);
        const [loading,setLoading]=useState(false);

        const login=async(email,password)=>
        {
            setLoading(true)
            try
            {
              const result=await axios.post("http://localhost:8000/login",{email,password});

              setToken(result.data.token);

              localStorage.setItem("Token",result.data.token);
              
            }
            catch(err)
            {
              alert("There is some error while logging");
            }

            finally
            {
              setLoading(false);
            }

        }

        const logout=()=>
        {
          setToken(null);
          localStorage.removeItem("Token");

        }

        const value={token,loading,login,logout};

     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

    }



