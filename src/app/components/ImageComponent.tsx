import { memo, useEffect, useState } from "react";
// const icon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="currentColor"
//       fill-rule="evenodd"
//       d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
//       clipRule="evenodd"
//     />
//   </svg>
// );
const ImageComponent: React.FC<{
  src: string | undefined;
  className?: string;
}> = memo(({ src, className }) => {
  const [error, setError] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const onError = () => setError(true);
  const onLoad = () => setIsLoading(true);
  useEffect(() => {
    setError(false);
    setIsLoading(false);
  }, [src]);

  if (error)
    return (
      <div className="flex items-center justify-center bg-gray-200 rounded-full min-w-12 min-h-12 max-w-12 max-h-12">
        {/* {icon} */}
      </div>
    );
  // if (isloading) {
  //   return <span className="w-1 h-2 bg-black"></span>;
  // }
  return (
    <img src={src} onError={onError} className={className} onLoad={onLoad} />
  );
});

export default ImageComponent;
