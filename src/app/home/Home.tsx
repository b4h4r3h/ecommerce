import { useAllProducts } from "./hooks/useAllProducts"
import "../../index.css"
import SecondBanner from "./banner/SecondBanner";
import ProductCard from "../components/ProductCard";

const Home :React.FC = () => {
    const {data,isLoading} = useAllProducts();
    console.log("dataaaaaaa",data)
return (
    <>
    <SecondBanner/>
    <ProductCard/>
    <ProductCard/>

    </>
)
}

export default Home