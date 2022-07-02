import axios from "axios";
import React, { createContext } from "react";
import {BASE_URL} from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const register = (name,email,password)=>{
        axios.post(`${BASE_URL}/signup`,{
          name,
          email,
          password
        }).then(res=>{
           let userInfo = res;
           console.log(userInfo);
        }).catch(e=>{console.log(`registration error ${e}`)});
    }


  return (
    <AuthContext.Provider value={register}>{children}</AuthContext.Provider>
  );
};
