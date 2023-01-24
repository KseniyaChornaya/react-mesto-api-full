import React from "react";
import { useEffect, useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange } = useForm(currentUser);

  useEffect(() => {
    setValues(currentUser);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ values });
  }

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"profile"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        required
        placeholder="Имя"
        id="name"
        type="text"
        className="popup__input popup__input_field_name"
        name="name"
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="name-error"></span>
      <input
        required
        placeholder="Деятельность"
        id="job"
        type="text"
        className="popup__input popup__input_field_job"
        name="about"
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="job-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
