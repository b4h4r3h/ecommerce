import React, { memo } from 'react';

const ProductCard: React.FC<{
  image: string;
  price: number;
  title: string;
}> = memo(({image, price, title}) => {
    return (
      <div className='p-4 border-2 border-text-dark rounded-xl shadow-buttonShadow bg-white'>
        <img className='w-48 h-64 m-auto' src={image}/>
        <span className='text-text-dark text-base line-clamp-2 h-12 text-ellipsis my-3'>{title}</span>
        <div className='flex justify-between items-center'>
        <span className='text-text-dark text-lg font-bold'>{price} $</span>
        <p>button</p>
        </div>
      </div>
    )
})
export default ProductCard