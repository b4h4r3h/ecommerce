import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ImageComponent from "./ImageComponent";

const CartCard: React.FC<{
  imageClassName?: string | undefined;
  parentClassName?: string | undefined;
  src: string | null;
  title: string | null;
  price: number | null;
  quantity: number | null;

}> = ({ imageClassName, parentClassName, src, title, price, quantity }) => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );
  console.log(cartProduct, "cartEntity");
  console.log(quantity, "productEntity");
  return (
    <>
      {/* {cartProduct?.length > 0
        ? cartProduct?.map((item) => ( */}
      <div className={parentClassName}>
        <ImageComponent className={imageClassName} src={src} />
        <div className="flex gap-0 flex-col">
          <span className="leading-8 text-text-grade2 text-sm truncate w-72">
            {title}
          </span>
          <span className="leading-8 text-sm font-bold">{price} $</span>
          <div className="flex items-center">
          <span className="icon-[solar--add-circle-outline] text-3xl text-text-grade3"></span>
          <span className="leading-8 text-sm font-bold px-6">{quantity}</span>
          <span className="icon-[solar--minus-circle-outline] text-3xl text-text-grade3"></span>
          </div>
        </div>
      </div>
      {/* ))
        : ""} */}
    </>
  );
};
export default CartCard;
