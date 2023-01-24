import React, { useContext } from "react";
import CurrentUserContext  from "../context/CurrentUserContext";

const Card = ({onCardLike, onCardDelete, onCardClick, card }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__trash ${isOwn ? '' : 'card__trash_hidden'}`
  ); 

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
    ); 

  return (
    <div className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        data-popup="image"
        onClick={() => onCardClick(card)}
      />
      <button 
        className={cardDeleteButtonClassName}
        onClick={() => onCardDelete(card)}
        type="button"
        />
      <div className="card__describe">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button 
            className={cardLikeButtonClassName} 
            type="button" 
            onClick={() => onCardLike(card)}
            />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
