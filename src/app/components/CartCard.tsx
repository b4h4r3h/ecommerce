import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import ImageComponent from "./ImageComponent";
import { productIncreament, productDecreament } from "../../features/cart/cartProductsWithImage";
import { Button } from "antd";

const CartCard: React.FC<{
  imageClassName?: string | undefined;
  parentClassName?: string | undefined;
  src: string | null;
  title: string | null;
  price: number | null;
  quantity: number | null;
  productId: number | null
}> = ({ imageClassName, parentClassName, src, title, price, quantity, productId }) => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );

  const plusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
  )

  const minusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"/></svg>
  )

  const dispatch = useDispatch();

  const handleAddProductToCart = (image: string | null, title: string | null , price: number | null , productId: number | null) => {
    dispatch(productIncreament({ image, title, price,productId
     }));
  };

  const handleRemoveProductFromCart = ( productId: number | null) => {
    dispatch(productDecreament({ productId }));
  };

  return (
    <>
      {/* {cartProduct?.length > 0
        ? cartProduct?.map((item) => ( */}
      <div className={parentClassName}>
        <ImageComponent className={imageClassName} src={src} />
        <div className="flex flex-col">
          <span className="leading-4 text-text-grade2 text-sm truncate w-72">
            {title}
          </span>
          <span className="leading-8 text-sm font-bold">{price} $</span>
          <div className="flex items-center">
            <Button type="primary" className="flex px-0 !outline-none w-8 h-8 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1" onClick={() => handleAddProductToCart(src, title, price, productId)} >
              {/* <span className="icon-[solar--add-circle-outline] text-3xl text-text-grade3"></span> */}
              {plusIcon}
            </Button>
            <span className="leading-8 text-sm font-bold px-6">{quantity}</span>
            <Button type="primary" className="flex px-0 !outline-none w-8 h-8 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1" onClick={() => handleRemoveProductFromCart(productId)}>
              {/* <span className="icon-[solar--minus-circle-outline] text-3xl text-text-grade3"></span> */}
              {minusIcon}
            </Button>
          </div>
        </div>
      </div>
      {/* ))
        : ""} */}

      {/* <Button onClick={() => handleAddProductToCart(productDetailData?.image,productDetailData?.title,productDetailData?.price,productDetailData?.id,1)} className="h-11 w-96 font-bold text-base" type="primary">
            ADD TO CART - {productDetailData?.price}$
          </Button> */}
    </>
  );
};
export default CartCard;
