import { useAllCategories } from "../hooks/useAllCategories"

const CategoriesCard:React.FC<{}> = () => {
    const { data: allCategoriesData, isError: allCategoriesError, isLoading: allCategoriesLoading } = useAllCategories();
    console.log(allCategoriesData)

    return (
        allCategoriesData?.map((item) => {
            switch(item) {
                case "electronics":
                    return (
                        <p>hiiiiiiiiii every one</p>
                    );
                case "jewelery":
                    return "jeweleryyyyyyyyy";
                default:
                    return item; 
            }
        })
    )

}
export default CategoriesCard