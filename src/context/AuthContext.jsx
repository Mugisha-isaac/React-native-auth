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
        console.log(`registration error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{register,isLoading,userInfo}}>{children}</AuthContext.Provider>
  );
};
