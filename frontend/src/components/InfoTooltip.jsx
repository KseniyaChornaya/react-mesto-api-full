import success from "../images/success.svg";
import fail from "../images/fail.svg";

const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
  return (
    <div
      className={`popup popup_type_info ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          className="popup__sign"
          alt="icon"
          src={isSuccess ? success : fail}
        />
        <p className="popup__info">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
};

export { InfoTooltip };
