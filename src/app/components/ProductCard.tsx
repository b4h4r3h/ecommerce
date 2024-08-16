import { Card } from 'antd';
const { Meta } = Card;

const ProductCard: React.FC<{
  image: string;
  price: number;
  title: string;
}> = ({image, price, title}) => {
    return (
      <div className='p-4 border-2 border-text-dark rounded-xl shadow-buttonShadow'>
        <img className='w-48 h-64 m-auto' src={image}/>
        <span className='text-text-dark text-base line-clamp-2 h-12 text-ellipsis'>{title}</span>
        <div>
        <span className='text-text-dark text-lg font-bold'>{price} $</span>
        <p>button</p>
        </div>
      </div>
    )
}
export default ProductCard