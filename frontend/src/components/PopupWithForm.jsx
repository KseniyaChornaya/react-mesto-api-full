import React from "react";

const PopupWithForm = ({ title, name, children, isOpen, onClose, onSubmit, buttonText}) => {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup_${name}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          id={`${name}_close`}
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`${name}_form`}
          id={`${name}_form`}
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__submit">
          {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
