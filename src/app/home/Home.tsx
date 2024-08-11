import { useAllProducts } from "./hooks/useAllProducts"
import "../../index.css"
import SecondBanner from "./banner/SecondBanner";

const Home :React.FC = () => {
    const {data,isLoading} = useAllProducts();
    console.log("dataaaaaaa",data)
return (
    <>
    <SecondBanner/>
    
    </>
)
}

export default Home