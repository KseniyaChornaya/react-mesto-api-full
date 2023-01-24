export const cardFormAdd = document.querySelector("#addForm");
export const popupImage = "#image";
export const profileFormEdit = document.querySelector("#editForm");
export const buttonsPopupClose = document.querySelectorAll(".popup__close");
export const placeImage = document.querySelector("#image .popup__image");
export const placeTitle = document.querySelector("#image .popup__title");
export const popup = document.querySelector(".popup");
export const avatarProfile = ".profile__avatar";
export const avatarInput = document.querySelector(".popup__input_link_avatar");
export const profileName = ".profile__name";
export const profileJob = ".profile__job";
export const cards = document.querySelector(".cards");
export const cardTemplate = document.querySelector("#template");
export const popupEdit = "#edit";
export const popupAdd = "#add";
export const popupAvatar = '#avatar';
export const popupConfirm = '#confirmation';
export const buttonEdit = document.querySelector(".profile__edit-button");
export const buttonAdd = document.querySelector(".profile__add-button");
export const escKeyButton = 27;
export const submitAddButton = document.querySelector("#addSubmit");
export const submitEditButton  = document.querySelector('#editSubmit');
export const submitAvatarButtom = document.querySelector("#avatarSubmit")
export const avatarEditForm = document.querySelector("#editAvatar");
export const avatarEditButton = document.querySelector(".profile__avatar-edit");
export const confirmButton = document.querySelector("#confirmationSubmit");

export const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inputErrorClass: "popup__input_type_error",
    errorActiveClass: "popup__input-error_active",
    host: 'https://mesto.nomoreparties.co/v1/cohort-47/',   
    headers: {
      authorization: '862c5689-9bb9-4098-8d9c-6b67add907ce',
      "content-type": "application/json",
    }
  };