import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { RootState } from "../../store/store";
import {
  productIncreament,
  productDecreament,
} from "../../../features/cart/cartProductsWithImage";
import { GetAllProducts } from "../../../interface/products";

const AddToCartButton: React.FC<{productDetailData: GetAllProducts}> = ({productDetailData}) => {
  const cartProductsWithImage = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );
  const dispatch = useDispatch();

  const handleAddProductToCart = (
    image: string,
    title: string,
    price: number,
    productId: number
  ) => {
    dispatch(productIncreament({ image, title, price, productId }));
  };

  const handleDecrease = (productId: number) => {
    dispatch(productDecreament({ productId }));
  };

  console.log("cartProductsWithImage",cartProductsWithImage)
  console.log("productDetailData",productDetailData)
  
  return (
    <Button
      onClick={() =>
        handleAddProductToCart(
            productDetailData?.image,
            productDetailData?.title,
            productDetailData?.price,
          productDetailData?.id
        )
      }
      className="h-11 w-96 font-bold text-base"
      type="primary"
    >
      ADD TO CART - {productDetailData?.price}$
    </Button>
  );
};

export default AddToCartButton;
