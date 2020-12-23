import { createContext } from "react";

const authFunc = () => {};

const AuthContext = createContext({
  token: null,
  userId: null,
  login: authFunc,
  logout: authFunc,
  isAuthenticated: false,
});

export default AuthContext;
