import { lazy, Suspense, ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../app/layout/LandingLayout";
// import ProductDetail from "../app/ProductDetail";
import Fallback from "../app/components/Fallback";

const Home = lazy(() => import("../app/home/Home"));
const ProductList = lazy(() => import("../app/ProductList"));
const ProductDetail = lazy(() => import("../app/ProductDetail"));

interface SuspenseWrapperPropType {
  component:React.LazyExoticComponent<React.ComponentType<any>>,
  fallback?: ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperPropType> = ({component: Component, fallback=<Fallback/>}) => (
  <Suspense fallback={fallback}>
    <Component/>
  </Suspense>
)

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      // errorElement
      children:[
        {
          path:"",
          element: <SuspenseWrapper component={Home} />
        },  
        {
          path:"products/category/:name",
          element: <SuspenseWrapper component={ProductList} />
        },
        {
          path: "products/:id",
          element: <SuspenseWrapper component={ProductDetail}/>
        }
      ]
    },
  ]);