import { Link } from "react-router-dom";
import { useAllCategories } from "../hooks/useAllCategories";

const CategoriesCard: React.FC = () => {
  const {
    data: allCategoriesData,
    isError: allCategoriesError,
    isLoading: allCategoriesLoading,
  } = useAllCategories();
  console.log(allCategoriesData);

  if (allCategoriesLoading) {
    return (
      <div className="flex gap-4 sm:gap-6 lg:gap-12 xl:gap-16 2xl:gap-24 justify-center">
        {
          Array.from({ length: 4 }).map(() => (
            <div>
            <span className="block w-14 h-14 sm:w-16 sm:h-16 lg:w-28 lg:h-28 bg-white border-2 shadow-loadingCardShadow rounded-xl m-auto"></span>
            <span className="block w-16 sm:w-28 lg:w-36 bg-gray-middle h-3 rounded-lg mt-4"></span>
            </div>
          ))
        }

      </div>
    )
  }

  return (
    <section className="flex justify-center">
      {allCategoriesData?.map((item, i) => {
        let content;
        switch (item) {
          case "electronics":
            content = (
              <>
                <Link to="products/category/electronics" className="bg-green-100 inline-block p-2 sm:p-3 lg:p-5 shadow-buttonShadow border-2 border-text-dark rounded-xl">
                  <span
                    className="block icon-[solar--display-outline] text-green-800 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  ></span>
                </Link>
                <p className="w-16 sm:w-28 lg:w-32 sm:text-sm lg:text-base text-center">electronics</p>
              </>
            );
            break;
          case "jewelery":
            content = (
              <>
                <Link to="products/category/jewelery" className="bg-rose-100 inline-block p-2 sm:p-3 lg:p-5 shadow-buttonShadow border-2 border-text-dark rounded-xl">
                  <span
                    className="block icon-[solar--crown-outline] text-rose-600 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  ></span>
                </Link>
                <p className="w-16 sm:w-28 lg:w-32 sm:text-sm lg:text-base text-center">jewelery</p>
              </>
            );
            break;
          case "men's clothing":
            content = (
              <>
                <Link to="products/category/men's clothing" className="bg-sky-100 inline-block p-2 sm:p-3 lg:p-5 shadow-buttonShadow border-2 border-text-dark rounded-xl">
                  <span
                    className="block icon-[solar--t-shirt-outline] text-sky-800 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  ></span>
                </Link>
                <p className="w-16 sm:w-28 lg:w-32 sm:text-sm lg:text-base text-center">men's clothing</p>
              </>
            );
            break;
          case "women's clothing":
            content = (
              <>
                <Link to="products/category/women's clothing" className="bg-fuchsia-100 inline-block p-2 sm:p-3 lg:p-5 shadow-buttonShadow border-2 border-text-dark rounded-xl">
                  <span
                    className="block icon-[solar--skirt-outline] text-fuchsia-800 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  ></span>
                </Link>
                <p className="w-16 sm:w-28 lg:w-32 sm:text-sm lg:text-base text-center">women's clothing</p>
              </>
            );
            break;
          default:
            content = <p>{item}</p>;
        }

        return (
          <div className="flex flex-col items-center px-2 sm:px-4 lg:px-10 gap-3" key={i}>
            {content}
          </div>
        );
      })}
    </section>
  );
};

export default CategoriesCard;
