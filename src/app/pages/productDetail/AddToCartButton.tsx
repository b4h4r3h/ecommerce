import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { RootState } from "../../store/store";
import {
  productIncreament,
  productDecreament,
} from "../../../features/cart/cartProductsWithImage";
import { GetAllProducts } from "../../../interface/products";

const AddToCartButton: React.FC<{ productDetailData: GetAllProducts }> = ({ productDetailData }) => {

  const plusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
  )

  const minusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"/></svg>
  )

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

  const handleDecreaseProduct = (productId: number | null) => {
    dispatch(productDecreament({ productId }));
  };

  const findEachProduct = cartProductsWithImage.find((item) => item.productId === productDetailData?.id)

  return (
    <>
      {
        (!findEachProduct) &&
        <Button
          onClick={() =>
            handleAddProductToCart(
              productDetailData?.image,
              productDetailData?.title,
              productDetailData?.price,
              productDetailData?.id
            )
          }
          className="h-11 w-96 font-bold text-base hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1"
          type="primary"
        >
          ADD TO CART - {productDetailData?.price}$
        </Button>
      }
      {findEachProduct && findEachProduct?.quantity >= 1 && (
        <div className="bg-primary h-11 flex items-center justify-between w-72 rounded-md shadow-buttonShadow hover:shadow-lightShadow hover:bg-[#ffd659] hover:translate-x-1 hover:translate-y-1">
          <Button
          className="!bg-transparent hover:!bg-none border-none shadow-none hover:!text-text-dark !outline-none"
          onClick=
          {() =>
            handleAddProductToCart(
              productDetailData?.image,
              productDetailData?.title,
              productDetailData?.price,
              productDetailData?.id
            )
          }
          >
            {plusIcon}
          </Button>
          <span className="font-bold text-base">
          {findEachProduct.quantity}
          </span>
          <Button
          className="!bg-transparent hover:!bg-none border-none shadow-none hover:!text-text-dark !outline-none"
          onClick={() => handleDecreaseProduct(findEachProduct.productId)}
          >
            {minusIcon}
          </Button>
        </div>
      )
      }
    </>
  );
};

export default AddToCartButton;
