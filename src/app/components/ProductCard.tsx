import { Card } from 'antd';
const { Meta } = Card;

const ProductCard: React.FC<{

}> = ({}) => {
    return (
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
            <p>click</p>
          ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    )
}
export default ProductCard