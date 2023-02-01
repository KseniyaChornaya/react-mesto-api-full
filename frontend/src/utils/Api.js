import {config} from "./const";

class Api {
  constructor(options) {
    this._getOptions = options;
    this._host = options().host;
  }

  _getJsonErrors(res){
    if (res.ok) {
        return res.json();
      }
      throw new Error("Ошибка при загрузке данных");
    }

  getCards() {
    return fetch(this._host + "cards", {
      headers: this._getOptions().headers,
    })
    .then((res) => this._getJsonErrors(res))
  }

  getUserInfo() {
    return fetch(this._host + "users/me", {
      method: "GET",
      headers: this._getOptions().headers,
    })
    .then((res) => this._getJsonErrors(res))
  }

  editUserInfo(user) {
    return fetch(this._host + "users/me", {
      method: "PATCH",
      headers: this._getOptions().headers,
      body: JSON.stringify({    
          name: user.name,
          about: user.about
      }),
    })
    .then((res) => this._getJsonErrors(res))
  }

  createCard(payload) {
    return fetch(this._host + "cards", {
      method: "POST",
      headers: this._getOptions().headers,
      body: JSON.stringify(payload),
    })
    .then((res) => this._getJsonErrors(res))
  }

  setAvatar(data) {
    return fetch(this._host + "users/me/avatar", {
      method: "PATCH",
      headers: this._getOptions().headers,
      body: JSON.stringify({ avatar: data }),
    })
    .then((res) => this._getJsonErrors(res))
  }

  deleteCard(id) {
    return fetch(`${this._host}cards/${id}`, {
      method: "DELETE",
      headers: this._getOptions().headers,
    })
    .then((res) => this._getJsonErrors(res))
  }

  toggleLike(id, isLiked) {
    return fetch(`${this._host}cards/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._getOptions().headers,
    })
    .then((res) => this._getJsonErrors(res))
  }

  _handleLike(method, id) {
    return fetch(`${this._host}cards/${id}/likes`, {
        method: method,
        headers: this._getOptions().headers,
    })
    .then((res) => this._getJsonErrors(res))
}

  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this._handleLike('DELETE', id) : this._handleLike('PUT', id)
  }
}

const api = new Api(config);
export default api;