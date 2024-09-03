import { Fragment } from "react/jsx-runtime";
import { useAllCategories } from "../hooks/useAllCategories";

const CategoriesCard: React.FC = () => {
  const {
    data: allCategoriesData,
    isError: allCategoriesError,
    isLoading: allCategoriesLoading,
  } = useAllCategories();
  console.log(allCategoriesData);

  return (
    <div className="flex justify-center ">
      {allCategoriesData?.map((item, i) => {
        let content;
        switch (item) {
          case "electronics":
            content = (
              <>
                <div className="bg-green-100 inline-block px-5 py-4">
                  <span
                    className="icon-[solar--display-outline] text-green-800"
                    style={{ width: "56px", height: "56px" }}
                  ></span>
                </div>
                <p className="w-28 text-center">electronics</p>
              </>
            );
            break;
          case "jewelery":
            content = (
              <>
                <div className="bg-orange-100 inline-block px-5 py-4">
                  <span
                    className="icon-[solar--crown-outline] text-orange-600"
                    style={{ width: "56px", height: "56px" }}
                  ></span>
                </div>
                <p className="w-28 text-center">jewelery</p>
              </>
            );
            break;
          case "men's clothing":
            content = (
              <>
                <div className="bg-sky-100 inline-block px-5 py-4">
                  <span
                    className="icon-[solar--t-shirt-outline] text-sky-800"
                    style={{ width: "56px", height: "56px" }}
                  ></span>
                </div>
                <p className="w-28 text-center">men's clothing</p>
              </>
            );
            break;
          case "women's clothing":
            content = (
              <>
                <div className="bg-fuchsia-100 inline-block px-5 py-4">
                  <span
                    className="icon-[solar--skirt-outline] text-fuchsia-800"
                    style={{ width: "56px", height: "56px" }}
                  ></span>
                </div>
                <p className="w-28 text-center">women's clothing</p>
              </>
            );
            break;
          default:
            content = <p>{item}</p>;
        }

        return (
            <div className="flex flex-col items-center px-10" key={i}>
              {content}
            </div>
        );
      })}
    </div>
  );
};

export default CategoriesCard;
