const Title: React.FC<{ title: string; hasBack: boolean }> = ({
  title,
  hasBack,
}) => (
  <div>
    {hasBack &&
    
    }
    <h3 className="text-2xl font-bold text-center mt-12 mb-4 text-text-dark">
      {title}
    </h3>
  </div>
);
export default Title;
