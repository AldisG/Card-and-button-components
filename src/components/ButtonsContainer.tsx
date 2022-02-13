import '../styles/ButtonsFirstRow.scss';

const ButtonsContainer = () => {
  return (
    <div className="all-cards-container all-buttons-container">
      <button className="button">
        <div className="buttons-text">Button</div>
      </button>
      <button className="button button--round">
        <div className="buttons-text">Button</div>
      </button>
      <button className="button button-light">
        <div className="buttons-text">Button</div>
      </button>
      <button className="button button-light--round">
        <div className="buttons-text">Button</div>
      </button>
      <button className="button button-white">
        <div className="buttons-text">Button</div>
      </button>
      <button className="button button-white--round">
        <div className="buttons-text">Button</div>
      </button>
    </div>
  );
};

export default ButtonsContainer;
