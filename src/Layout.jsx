import { Outlet } from "react-router-dom";
import { Header, Footer, Loading } from "./Components/index";
import { useDispatch } from "react-redux";
import { login, logout } from "../src/store/Appslice";
import { useEffect, useState } from "react";
import authService from "./appwriteService/auth";
import {Loading as LoadingComp} from "./Components/index.js"

export default function Layout() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
   useEffect(() => {
      authService
         .currentUser()
         .then((userData) => {
            if (userData) {
               dispatch(login(userData));
            } else {
               dispatch(logout());
            }
         })
         .catch((e) => console.log("there is a error:: ", e))
         .finally(() => setLoading(false));
   }, []);
   return loading ? (
      <LoadingComp />
   ) : (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
