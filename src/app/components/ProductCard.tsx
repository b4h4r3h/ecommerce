import { Card } from 'antd';
const { Meta } = Card;

const ProductCard: React.FC<{
  image: string;
  price: number;
  title: string;
}> = ({image, price, title}) => {
    return (
      <div>
        <img src={image}/>
        <span>{title}</span>
        <div>
        <span>{price}</span>
        <p>button</p>
        </div>
      </div>
    )
}
export default ProductCard