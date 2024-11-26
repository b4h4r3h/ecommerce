import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "./ImageComponent";
import { productIncreament, productDecreament } from "../../features/cart/cartProductsWithImage";
import { Button } from "antd";
import { RootState } from "../store/store";

const CartCard: React.FC<{
  imageClassName?: string | undefined;
  parentClassName?: string | undefined;
  src: string;
  title: string;
  price: number;
  quantity: number;
  productId: number
}> = ({ imageClassName, parentClassName, src, title, price, quantity, productId }) => {

  const plusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
  )

  const minusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"/></svg>
  )

  const dispatch = useDispatch();

  const handleAddProductToCart = (image: string, title: string , price: number , productId: number) => {
    dispatch(productIncreament({ image, title, price,productId
     }));
  };

  const handleRemoveProductFromCart = ( productId: number, price: number) => {
    dispatch(productDecreament({ productId, price}));
  };

  return (
      <div className={parentClassName}>
        <ImageComponent className={imageClassName} src={src} />
        <div className="flex flex-col">
          <span className="leading-4 text-text-grade2 text-sm truncate w-72">
            {title}
          </span>
          <span className="leading-8 text-sm font-bold">{+(price * quantity).toFixed(2)} $</span>
          <div className="flex items-center">
          <Button type="primary" className="flex px-0 !outline-none w-8 h-8 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1" onClick={() => handleRemoveProductFromCart(productId, price)}>
              {minusIcon}
            </Button>
            <span className="leading-8 text-sm font-bold px-6">{quantity}</span>

            <Button type="primary" className="flex px-0 !outline-none w-8 h-8 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1" onClick={() => handleAddProductToCart(src, title, price, productId)} >
              {plusIcon}
            </Button>
          </div>
        </div>
      </div>
  );
};
export default CartCard;
