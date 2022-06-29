import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isauth } from "../Redux/Action/action";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [sortM,setSortM] = useState("");
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const login = (token) => {
    if (token !== undefined) {
      console.log("token", token);
      setIsAuth(true);
      setToken(token);
      dispatch(isauth(true));
      navigate("/cartpage")
    }
  };

  const logout = () => {
    setIsAuth(false);
    // localStorage.clear();
    localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token,sortM,setSortM }}>
      {children}
    </AuthContext.Provider>
  );
};
