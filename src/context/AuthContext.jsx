import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [splashLoading, setSplashLoading] = React.useState(false);

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

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, { email, password })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Login error ${err}`);
        setIsLoading(false);
      });
  };

  // to implement it's backend api
  // const logout = ()=>{
  //     setIsLoading(true);

  // }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is Logged In error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ register, login,splashLoading, isLoading, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
