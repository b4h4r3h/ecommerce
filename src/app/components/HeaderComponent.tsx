import ImageComponent from "./ImageComponent";
import logo from "../../assets/image/krist-logo.svg";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => (
  <>
    <div className="flex [&>a]:px-6 [&>a]:text-text-dark">
      <span className="mr-4">
      <Link to="">
        <ImageComponent src={logo} />
      </Link>
      </span>
      <Link to="/products/category/electronics">electronics</Link>
      <Link to="/products/category/jewelery">jewelery</Link>
      <Link to="/products/category/men's clothing">men's clothing</Link>
      <Link to="/products/category/women's clothing">women's clothing</Link>
    </div>
    <div>
      <Link to="">
        <span className="icon-[solar--cart-large-2-outline]"></span>
      </Link>
      <Link to="">
        <span className="icon-[solar--user-rounded-outline]"></span>
      </Link>
    </div>
  </>
);
export default HeaderComponent;
