import ImageComponent from "./ImageComponent";
import logo from "../../assets/image/krist-logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartCard from "./CartCard";
import { Menu } from "antd";
import type { MenuProps } from "antd";

const HeaderComponent: React.FC = () => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );
  const [isCartVisible, setIsCartVisible] = useState<Boolean>(false);
  const [current, setCurrent] = useState("electronics");

  const onMenuClick: MenuProps["onClick"] = (e) => setCurrent(e.key);

  const handleMouseEnterToShowCartCard = () => setIsCartVisible(true);
  const handleMouseLeaveToHideCartCard = () => setIsCartVisible(false);
  const cartTotalPriceInitialValue: number = 0;
  const cartTotalPrice = cartProduct
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.unitPrice,
      cartTotalPriceInitialValue
    )
    .toFixed(2);

  const menuItems: MenuProps["items"] = [
    {
      key: "electronics",
      label: <Link to="/products/category/electronics">Electronics</Link>,
    },
    {
      key: "jewelery",
      label: <Link to="/products/category/jewelery">Jewelery</Link>,
    },
    {
      key: "menClothing",
      label: <Link to="/products/category/men's clothing">Men's Clothing</Link>,
    },
    {
      key: "womenClothing",
      label: (
        <Link to="/products/category/women's clothing">Women's Clothing</Link>
      ),
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
        {/* <ul className="flex items-center [&>li]:px-6 [&>li>a]:text-text-dark [&>li>a]:inline-block">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul> */}
        <Menu
          onClick={onMenuClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={menuItems}
          className="w-full" 
          // className="flex-1"
        />
      </nav>
      <div className="flex">
        <button
          onMouseEnter={handleMouseEnterToShowCartCard}
          onMouseLeave={handleMouseLeaveToHideCartCard}
          className="flex items-center bg-transparent py-0 px-4 border-l border-l-text-dark rounded-none relative"
        >
          <div className="absolute bg-primary flex items-center justify-center w-5 h-5 max-h-5 max-w-5 z-10 top-8 right-7 rounded-sm border border-white">
            <span className="text-text-dark text-xs">{cartProduct.length}</span>
          </div>
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

      {isCartVisible && (
        <div
          onMouseEnter={handleMouseEnterToShowCartCard}
          onMouseLeave={handleMouseLeaveToHideCartCard}
          className="absolute flex top-14 px-2 pt-2 right-10 bg-white items-center rounded-lg shadow-buttonShadow border border-text-dark flex-col"
        >
          <div className=" max-h-96 overflow-y-auto px-2">
            {cartProduct.length > 0 ? (
              cartProduct?.map((item, i) => (
                <CartCard
                  key={i}
                  imageClassName="w-14 min-w-14 h-16"
                  parentClassName={`flex gap-4 items-center py-4${
                    cartProduct.length - i == 1
                      ? ""
                      : " border-b border-b-text-gray-middle"
                  }`}
                  src={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  productId={item.productId}
                />
              ))
            ) : (
              <div className="flex flex-col items-center px-6 w-full">
                <div className="bg-gray-light flex items-center p-4 rounded-[2rem] mt-4">
                  <span className="icon-[solar--cart-cross-outline] text-3xl text-text-grade3"></span>
                </div>
                <p>Cart is empty</p>
              </div>
            )}
          </div>
          {Number(cartTotalPrice) > 0 && (
            <div className="flex items-center justify-between py-3 px-2 w-full bottom-2 bg-white border-t border-t-text-dark">
              <span className="leading-normal">Total Price:</span>
              <span className="leading-normal font-bold text-lg">
                {cartTotalPrice}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default HeaderComponent;
