import { useAllCategories } from "../hooks/useAllCategories";

const CategoriesCard: React.FC = () => {
  const {
    data: allCategoriesData,
    isError: allCategoriesError,
    isLoading: allCategoriesLoading,
  } = useAllCategories();
  console.log(allCategoriesData);

  return (
    <div>
      {allCategoriesData?.map((item) => {
        let content;

        switch (item) {
          case "electronics":
            content = <p>electronics</p>;
            break;
          case "jewelery":
            content = <p>jewelery</p>;
            break;
          case "men's clothing":
            content = <p>men's clothing</p>;
            break;
            case "women's clothing":
                content = <p>women's clothing</p>;
                break;
          default:
            content = <p>{item}</p>;
        }

        return <div key={item}>{content}</div>;
      })}
    </div>
  );
};

export default CategoriesCard;
