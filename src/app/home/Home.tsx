import { useAllProducts } from "./hooks/useAllProducts"

const Home :React.FC = () => {
    const {data,isLoading} = useAllProducts();
    console.log("dataaaaaaa",data)
return (
    <p>Hoooooooooooooooooome</p>
)
}

export default Home