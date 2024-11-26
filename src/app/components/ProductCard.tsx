import React, { memo } from "react";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  productIncreament,
  productDecreament,
} from "../../features/cart/cartProductsWithImage";
import { Button } from "antd";

const ProductCard: React.FC<{
  image: string;
  price: number;
  title: string;
  id: number;
}> = memo(({ image, price, title, id }) => {
  const plusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
      />
    </svg>
  );

  const minusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
    </svg>
  );

  const cartProductsWithImage = useSelector(
    (state: RootState) => state.cartProductsWithImage
  );

  const dispatch = useDispatch();
  const findEachProduct = cartProductsWithImage.find(
    (item) => item.productId === id
  );

  const handleAddProductToCart = (
    image: string,
    title: string,
    price: number,
    productId: number,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(productIncreament({ image, title, price, productId }));
  };

  const handleDecreaseProduct = (
    productId: number,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    price: number
  ) => {
    e.preventDefault();
    dispatch(productDecreament({ productId, price }));
  };

  return (
    <Link
      to={`/products/${id}`}
      className="block p-4 border-2 border-text-dark rounded-xl shadow-buttonShadow hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1 bg-white"
    >
      <ImageComponent className="w-48 h-64 m-auto" src={image} />
      <span className="text-text-dark text-base line-clamp-2 h-12 text-ellipsis my-6">
        {title}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-text-dark text-lg font-bold">{price} $</span>
        {!findEachProduct && (
          <Button
            type="primary"
            className="flex px-0 !outline-none w-9 h-9 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1"
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleAddProductToCart(image, title, price, id, e)
            }
          >
            {plusIcon}
          </Button>
        )}
        {findEachProduct && findEachProduct?.quantity >= 1 && (
          <div className="flex justify-between items-center">
            <Button
              type="primary"
              className="flex px-0 !outline-none w-9 h-9 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1"
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                    handleDecreaseProduct(findEachProduct.productId, e ,findEachProduct?.price)
                  }
            >
              {minusIcon}
            </Button>
            <span className="leading-8 text-sm font-bold px-6 decoration-transparent text-text-dark">
              {findEachProduct?.quantity}
            </span>

            <Button
              type="primary"
              className="flex px-0 !outline-none w-9 h-9 hover:shadow-lightShadow hover:translate-x-1 hover:translate-y-1"
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                      handleAddProductToCart(image, title, price, id, e)
                    }
            >
              {plusIcon}
            </Button>
          </div>
        )}
      </div>
    </Link>
  );
});
export default ProductCard;
