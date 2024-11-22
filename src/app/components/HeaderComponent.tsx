import ImageComponent from "./ImageComponent";
import logo from "../../assets/image/krist-logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartCard from "./CartCard";

const HeaderComponent: React.FC = () => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );
  const [isCartVisible, setIsCartVisible] = useState<Boolean>(false);

  const handleMouseEnterToShowCartCard = () => setIsCartVisible(true);
  const handleMouseLeaveToHideCartCard = () => setIsCartVisible(false);

  const navItems = [
    {
      name: "electronics",
      url: "/products/category/electronics",
    },
    {
      name: "jewelery",
      url: "/products/category/jewelery",
    },
    {
      name: "men's clothing",
      url: "/products/category/men's clothing",
    },
    {
      name: "women's clothing",
      url: "/products/category/women's clothing",
    },
  ];

  return (
    <>
      <nav className="flex items-center relative">
        <span className="mr-4">
          <Link to="">
            <ImageComponent className="w-28 h-auto" src={logo} />
          </Link>
        </span>
        <ul className="flex items-center [&>li]:px-6 [&>li>a]:text-text-dark [&>li>a]:inline-block">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        <button
          onMouseEnter={handleMouseEnterToShowCartCard}
          onMouseLeave={handleMouseLeaveToHideCartCard}
          className="flex items-center bg-transparent py-0 px-4 border-l border-l-text-dark rounded-none"
        >
          <span className="icon-[solar--cart-large-2-outline] text-2xl text-text-dark"></span>
        </button>
        <Link
          className="flex items-center gap-2 border-r border-l border-text-dark px-4"
          to=""
        >
          <span className="icon-[solar--user-rounded-outline] text-2xl text-text-dark"></span>
          <span className="text-text-dark">Login</span>
        </Link>
      </div>

      {/* {isCartVisible && ( */}
        <div
          className="absolute gap-4 flex top-14 p-4 right-10 bg-white items-center
          rounded-lg shadow-buttonShadow border border-text-dark flex-col "
          // onMouseEnter={handleMouseEnterToShowCartCard}
          // onMouseLeave={handleMouseLeaveToHideCartCard}
        >
          {cartProduct.length > 0 ? (
            cartProduct?.map((item, i) => (
              <CartCard
                key={i}
                imageClassName="w-14 min-w-14 h-16"
                parentClassName={`flex gap-4 items-center pb-4${
                  cartProduct.length - i == 1
                    ? ""
                    : " border-b border-b-gray-low"
                }`}
                src={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                productId = {item.productId}
              />
            ))
          ) : (
            <div className="flex flex-col items-center px-6">
              <div className="bg-gray-light flex items-center p-4 rounded-[2rem] mt-4">
                <span className="icon-[solar--cart-cross-outline] text-3xl text-text-grade3"></span>
              </div>
              <p>Cart is empty</p>
            </div>
          )}
        </div>
      {/* )} */}
    </>
  );
};
export default HeaderComponent;