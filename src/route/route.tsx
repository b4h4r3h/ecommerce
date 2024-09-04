import { createBrowserRouter } from "react-router-dom";
import Home from "../app/home/Home";
import LandingLayout from "../app/layout/LandingLayout";


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
          element:<p>hi</p>
        }
      ]
    },
  ]);