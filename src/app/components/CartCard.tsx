import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ImageComponent from "./ImageComponent";

const CartCard: React.FC = () => {
  const cartProduct = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );
  console.log(cartProduct, "cartEntity");
  return (
    <div>
      {cartProduct?.length > 0 ? cartProduct?.map((item) => 
      (
        <div>
                <ImageComponent src={item?.image}/>
            <div>
                <p>{item?.title}</p>
                <p>{item?.price}</p>
            </div>
        </div>
      )
      ) 
      : ""}
    </div>
  );
};
export default CartCard