import React, { useContext } from "react";
import Card from "./Card";
import CurrentUserContext  from "../context/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, handleCardLike, handleCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
        />
        <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__name">{currentUser.name ?? "Chornaya Kseniya"} </h1>
            <button
              className="profile__edit-button"
              type="button"
              data-popup="edit"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about ?? "Traveler"}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          data-popup="add"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            title={card.name}
            image={card.link}
            likesCount={card.likes.length}
            onCardClick={onCardClick}
            currentUser={currentUser}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
