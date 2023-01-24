import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const Register = ({ onRegistration }) => {
  const logData = {
    password: "",
    email: "",
  };
  const { values, handleChange } = useForm(logData);

  function handleRegistrationSubmit(evt) {
    evt.preventDefault();
    onRegistration(values.password, values.email);
  }

  return (
    <section className="auth">
      <form
        className="popup__form popup__form_type_auth"
        onSubmit={handleRegistrationSubmit}
      >
        <h3 className="popup__title popup__title_type_auth">Регистрация</h3>
        <input
          type="email"
          className="popup__input popup__input_type_auth"
          placeholder="Email"
          name="email"
          minLength="2"
          maxLength="50"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="popup__input popup__input_type_auth"
          placeholder="Пароль"
          name="password"
          minLength="3"
          maxLength="100"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          name="login"
          className="popup__submit popup__submit_type_auth"
        >
          Зарегистрироваться
        </button>
        <p className="auth__subtitle">
          Уже зарегистрированы?
          <Link
            className="auth__subtitle auth__subtitle_type_link"
            to={"/sign-in"}
          >
            {" "}
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
