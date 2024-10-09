import ImageComponent from "./ImageComponent";
import logo from "../../assets/image/krist-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

const HeaderComponent: React.FC = () => {
  const [isCartVisible,setIsCartVisible] = useState<boolean>(false);

  const cartEntity = useSelector((state:RootState) => state.cartEntity);
  const dispatch = useDispatch();

  console.log(cartEntity,"cartEntity")

  const handleShowCartOnMouseEnter = () => {
    setIsCartVisible(true)
  }

  return (
    <>
    <nav className="flex items-center">
      <span className="mr-4">
        <Link to="">
          <ImageComponent className="w-28 h-auto" src={logo} />
        </Link>
      </span>
      <ul className="flex items-center [&>li]:px-6 [&>li>a]:text-text-dark [&>li>a]:inline-block">
        <li>
          <Link to="/products/category/electronics">electronics</Link>
        </li>
        <li>
          <Link to="/products/category/jewelery">jewelery</Link>
        </li>
        <li>
          <Link to="/products/category/men's clothing">men's clothing</Link>
        </li>
        <li>
          <Link to="/products/category/women's clothing">women's clothing</Link>
        </li>
      </ul>
    </nav>
    <div className="flex">
      <Link onMouseEnter={handleShowCartOnMouseEnter} onMouseLeave={() => setIsCartVisible(false)} className="flex items-center px-6 border-l border-text-dark" to="">
        <span      
        className="icon-[solar--cart-large-2-outline] text-2xl text-text-dark"></span>
      </Link>
      <Link className="flex items-center gap-2 border-r border-l border-text-dark px-4" to="">
        <span className="icon-[solar--user-rounded-outline] text-2xl text-text-dark"></span>
        <span className="text-text-dark">Login</span>
      </Link>
    </div>
    {isCartVisible && (
      // <Card>
      // https://www.youtube.com/watch?v=yFlex9ZSVso
      // </Card>
    )}
  </>
  )
};
export default HeaderComponent;