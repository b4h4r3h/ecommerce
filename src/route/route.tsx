import { createBrowserRouter } from "react-router-dom";
import Home from "../app/home/Home";
import LandingLayout from "../app/layout/LandingLayout";
import ProductList from "../app/ProductList";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      // errorElement
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"products/category/:name",
          element:<ProductList/>
        }
      ]
    },
  ]);