import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../config/firebase";

const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  return (
    <authContext.Provider
      value={{
        isAuth,
        setIsAuth,
        currentUser,
        setCurrentUser,
        signup,
        login,
        logOut,
        resetPassword,
      }}
    >
      {!loading && children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
