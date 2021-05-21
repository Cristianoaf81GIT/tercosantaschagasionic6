import './ExploreContainer.css';

interface ContainerProps {
  children?: JSX.Element
}

const ExploreContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">      
      { children }     
    </div>
  );
};

export default ExploreContainer;
