// import ImageComponent from "../../components/ImageComponent";
import ImageComponent from "@/app/components/ImageComponent";
import { useProductDetail } from "../../hooks/useProductDetail";
import { Tag, Breadcrumb } from "antd";
import AddToCartButton from "./AddToCartButton";

const ProductDetail: React.FC<{}> = () => {
  const {
    data: productDetailData,
    isLoading: productDetailLoading,
    isError: productDetailError,
  } = useProductDetail();

  if (productDetailLoading) {
    return (
      <div className="flex gap-4 items-center container m-auto">
        <span className="inline-block w-96 h-[480px] bg-white border-2 shadow-loadingCardShadow rounded-xl"></span>
        <div className="flex-1">
          <span className="block w-96 bg-gray-middle h-4 mt-4 rounded-lg"></span>
          <div className="my-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="block w-full bg-gray-middle h-4 mt-4 rounded-lg"
              ></span>
            ))}
          </div>
          <span className="block w-80 bg-gray-middle h-11 shadow-loadingCardShadow mt-4 rounded-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="container m-auto">
      <Breadcrumb
        className="mt-6"
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: (
              <a href={`/products/category/${productDetailData?.category}`}>
                {productDetailData?.category}
              </a>
            ),
          },
          {
            title: productDetailData?.id,
          },
        ]}
      />
      <div className="flex gap-6 items-center mt-6">
        <ImageComponent
          src={productDetailData?.image}
          className="w-96 min-w-96 h-[480px] border-2 border-text-dark rounded-xl shadow-buttonShadow"
        />
        <div>
          <h2 className="text-xl text-text-dark font-bold mb-2">
            {productDetailData?.title}
          </h2>
          <Tag color="#DDF6C9" className="!border-secondary-low">
            <a
              className="!text-secondary"
              href={`/products/category/${productDetailData?.category}`}
            >
              {productDetailData?.category}
            </a>
          </Tag>
          <p className="text-sm text-text-grade2 mt-4">
            {productDetailData?.description}
          </p>
          {/* rating and purchase count */}
          <div className="flex items-center gap-4 mt-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">
                {productDetailData?.rating?.rate}
              </span>
              <span className="icon-[solar--star-bold] text-xl text-yellow-500"></span>
            </div>
            <span className="w-[1px] h-5 bg-gray-middle inline-block"></span>
            <span className="text-sm font-bold">
              Purchase Count: {productDetailData?.rating?.count}
            </span>
          </div>
          <div className="flex items-center flex-col w-fit">
            <p className="text-base font-bold mb-2">{productDetailData?.price} $</p>
            {productDetailData && (
              <AddToCartButton productDetailData={productDetailData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
