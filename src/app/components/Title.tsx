const Title: React.FC<{ title: string; hasBack?: boolean; onClick?: () => void }> = ({
  title,
  hasBack,
  onClick,
}) => (
  // <div onClick={onClick}>
  //   {hasBack ?
  //   <span className="icon-[solar--arrow-left-outline]"></span>
  //   } 
  //   <h3 className="text-2xl font-bold text-center mt-12 mb-4 text-text-dark">
  //     {title}
  //   </h3>
  // </div>
  hasBack ? (
    <div className="flex items-center gap-2" onClick={onClick}>
      <span className="icon-[solar--arrow-left-outline] w-5 h-5"></span>
      <span className="text-text-dark">{title}</span>
    </div>
  ) :
    <h3 className="text-2xl font-bold text-center mt-12 mb-4 text-text-dark">
      {title}
    </h3>
);
export default Title;
