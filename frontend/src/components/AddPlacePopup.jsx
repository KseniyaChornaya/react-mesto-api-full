import PopupWithForm from "./PopupWithForm";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

const AddPlacePopup = ({ isOpen, onClose, onAddCard }) => {
  const cardData = {
    name: "",
    link: "",
  };

  const { values, setValues, handleChange } = useForm(cardData);

  useEffect(() => {
    setValues(cardData);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({ name: values.name, link: values.url });
  }

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"place"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Cоздать"
      onSubmit={handleSubmit}
    >
      <input
        required
        placeholder="Название"
        id="place"
        type="text"
        className="popup__input popup__input_place_name"
        name="name"
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="place-error"></span>
      <input
        required
        placeholder="Ссылка на картинку"
        id="link"
        type="url"
        className="popup__input popup__input_place_link"
        name="url"
        minLength="2"
        value={values.url || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="link-error"></span>
    </PopupWithForm>
  );
};
export default AddPlacePopup;
