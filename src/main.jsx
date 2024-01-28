import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home, About, Contact, ApiKey, Login, Register, Logout} from "./Components/index.js";
import "./index.css";
import ImageStore from './store/Store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/about", element: <About /> },
         { path: "/contact", element: <Contact /> },
         { path: "/apikey", element: <ApiKey /> },
         { path: "/login", element: <Login /> },
         { path: "/register", element: <Register /> },
         { path: "/logout", element: <Logout /> },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={ImageStore}>
      <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
);
