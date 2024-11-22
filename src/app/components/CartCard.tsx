import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import ImageComponent from "./ImageComponent";
import { productIncreament, productDecreament } from "../../features/cart/cartProductsWithImage";

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

  const dispatch = useDispatch();

  const handleAddProductToCart = (image: string | null, title: string | null, price: number | null, productId: number | null , quantity: number | null) => {
    dispatch(productIncreament({ image, title, price, 
      
     }));
  };

  const handleRemoveProductFromCart = ( productId: number | null , quantity: number | null) => {
    dispatch(productDecreament({ productId, quantity }));
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
            <button className="flex px-0" onClick={() => handleAddProductToCart(src, title, price, productId, quantity)} >
              <span className="icon-[solar--add-circle-outline] text-3xl text-text-grade3"></span>
            </button>
            <span className="leading-8 text-sm font-bold px-6">{quantity}</span>
            <button className="flex px-0" onClick={() => handleRemoveProductFromCart(productId, quantity)}>
              <span className="icon-[solar--minus-circle-outline] text-3xl text-text-grade3"></span>
            </button>
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
