import '../styles/CardsContainer.scss';
import FirstRowOfCards from './FirstRowOfCards';
import SecondColOfCards from './SecondColOfCards';
import ThirdColOfCards from './ThirdColOfCards';

const CardsContainer = () => {
  return (
    <div className="all-cards-container">
      <div className="cards-notifications">
        <FirstRowOfCards />
        <SecondColOfCards />
        <ThirdColOfCards />
      </div>
    </div>
  );
};

export default CardsContainer;
