import logo from "../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";

function Header({ loggedIn, userEmail, handleUserLogOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <div className="header__wrap">
        <p className="header__email">{loggedIn ? userEmail : ""}</p>
        <Routes>
          <Route
            path="sign-up"
            element={
              <Link className="header__link" to="/sign-in">
                Войти
              </Link>
            }
          />
          <Route
            path="/"
            element={
              <Link
                className="header__link"
                to="/sign-in"
                onClick={() => {
                  handleUserLogOut();
                }}
              >
                Выйти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link className="header__link" to="/sign-up">
                Регистрация
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
