import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

  const register = (name, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(`registration error ${e}`);
      });
  };


  const login = (email,password)=>{
    setIsLoading(true);

    axios.post(`${BASE_URL}/login`,{email,password}).then(res=>{
      let userInfo = res.data;
      console.log(userInfo)
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
    }).catch(err=>{
      console.log(`Login error ${err}`);
      setIsLoading(false);
    });
  }
  

  return (
    <AuthContext.Provider value={{register,login,isLoading,userInfo}}>{children}</AuthContext.Provider>
  );
};
