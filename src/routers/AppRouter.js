import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {
    const [checking, setChecking] = useState(true);
  
    const [isLoggedIn, setLoggedIn] = useState(false);
 
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setLoggedIn(true);
        console.log("usuario existe");
      } else {
        setLoggedIn(false);
        console.log("usuario no existe");
      }
      setChecking(false);
    });
  }, [isLoggedIn, checking]);
  if(checking){
    return (<h1>Is loading</h1>)
}

  return (
      
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/registro"
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <Registro />
            </PublicRoute>
          }
        />

        <Route path="/*" element={
         <PrivateRoute isAuth={isLoggedIn}>
        
             <DashboardRoutes />
       </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};
