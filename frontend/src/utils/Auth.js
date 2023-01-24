class Auth {
  constructor() {
    this._host = "http://localhost:3000";
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  signUp(password, email) {
    return fetch(`${this._host}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponse);
  }

  signIn(password, email) {
    return fetch(`${this._host}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponse);
  }

  checkToken(jwt) {
    return fetch(`${this._host}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._getResponse);
  }
}

const auth = new Auth();

export { auth };
