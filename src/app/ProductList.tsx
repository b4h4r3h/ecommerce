import { Fragment } from "react/jsx-runtime";
import ProductCard from "./components/ProductCard";
import { useSpecificCategory } from "./hooks/useSpecificCategory";
import Result from "./components/Result";
import { useNavigate } from "react-router-dom";
import Title from "./components/Title";

const ProductList: React.FC<{}> = () => {
  const {
    data: specificCategoryData,
    isLoading: specificCategoryLoading,
    isError: specificCategoryError,
  } = useSpecificCategory();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  //TODO
  if (specificCategoryLoading) {
    return (
      <div className="flex gap-4 sm:gap-6 lg:gap-12 xl:gap-16 2xl:gap-24 justify-center">
        {Array.from({ length: 4 }).map((item, i) => (
          <div key={i}>
            <span className="block w-14 h-14 sm:w-16 sm:h-16 lg:w-28 lg:h-28 bg-white border-2 shadow-loadingCardShadow rounded-xl m-auto"></span>
            <span className="block w-16 sm:w-28 lg:w-36 bg-gray-middle h-3 rounded-lg mt-4"></span>
          </div>
        ))}
      </div>
    );
  }

  if (specificCategoryError) {
    return (
      <Result
        icon={
          <span
            className="icon-[solar--close-circle-bold] text-error-main"
            style={{ width: "68px", height: "68px" }}
          ></span>
        }
        status="error"
        description="Failed to fetch data."
      />
    );
  }

  return (
    <Fragment>
      <Title title="back" hasBack={true} onClick={handleBack} />
      <section className="grid grid-cols-4 gap-6 mt-6">
        {/* <p onClick={handleBack}>heeeeeeeeeeey baaaaaaaaaaack</p> */}
        {specificCategoryData?.map((item) => (
          <Fragment key={item.id}>
            <ProductCard
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default ProductList;
