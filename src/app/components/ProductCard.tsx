import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addProduct } from '../../features/cart/cartEntitySlice';

const ProductCard: React.FC<{
  image: string;
  price: number;
  title: string;
  id: number;
}> = memo(({image, price, title, id}) => {

  const cartEntity = useSelector((state:RootState) => state.cartEntity)
  console.log(cartEntity)
  const dispatch = useDispatch()

    return (
      <Link to={`/products/${id}`} className='block p-4 border-2 border-text-dark rounded-xl shadow-buttonShadow bg-white'>
        <ImageComponent className='w-48 h-64 m-auto' src={image}/>
        <span className='text-text-dark text-base line-clamp-2 h-12 text-ellipsis my-6'>{title}</span>
        <div className='flex justify-between items-center'>
        <span className='text-text-dark text-lg font-bold'>{price} $</span>
        <p onClick={() => dispatch(addProduct(1))}>button</p>
        </div>
      </Link>
    )
})
export default ProductCard