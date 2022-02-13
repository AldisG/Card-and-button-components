import ButtonContainerXL from '../components/ButtonContainerXL';
import ButtonsContainer from '../components/ButtonsContainer';
import CardsContainerHeader from '../components/CardsContainerHeader';
const infoOne = {
  header: 'Variants',
  text: 'Copy any of these button variants in your project.',
};
const infoTwo = {
  header: 'Variants Preview',
  text: 'We’ve got variants in different colors, sizes and shapes. All of them are connected to components to improve usability and to bring you the best experience form using.',
};
const Buttons = () => {
  return (
    <div>
      <CardsContainerHeader
        header={infoOne.header}
        text={infoOne.text}
        icon={1}
      />
      <ButtonsContainer />
      <CardsContainerHeader
        header={infoTwo.header}
        text={infoTwo.text}
        icon={2}
      />
      <ButtonContainerXL />
    </div>
  );
};

export default Buttons;
