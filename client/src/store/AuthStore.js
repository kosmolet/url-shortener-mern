import React from "react";
import { useAuth } from "../hooks/useAuth";
import AuthContext from "./AuthContext";

const AuthStore = (props) => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStore;
