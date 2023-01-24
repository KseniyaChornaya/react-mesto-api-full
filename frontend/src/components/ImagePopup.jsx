import React from "react";

const ImagePopup = ({ onClose, card, isImageOpen }) => {
  return (
    <div className={`popup  ${isImageOpen ? "popup_opened" : null}`} id="image">
      <div className="popup__container popup__container_place">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img src={card.link} alt={card.name} className="popup__image" />
        <h2 className="popup__title popup__title_place">{card.name}</h2>
      </div>
    </div>
  );
};

export default ImagePopup;
