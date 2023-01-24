import { useForm } from "../hooks/useForm";

const Login = ({ onLogin }) => {
  const loginData = {
    email: "",
    password: "",
  };

  const { values, handleChange} = useForm(loginData);

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin(values.password, values.email);
  }

  return (
    <section className="auth">
      <form
        className="popup__form popup__form_type_auth"
        onSubmit={handleLoginSubmit}
      >
        <h3 className="popup__title">Вход</h3>
        <input
          type="email"
          className="popup__input popup__input_type_auth"
          placeholder="Email"
          name="email"
          minLength="4"
          maxLength="40"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="popup__input popup__input_type_auth"
          placeholder="Пароль"
          name="password"
          minLength="4"
          maxLength="40"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          name="login"
          className="popup__submit popup__submit_type_auth"
        >
          Войти
        </button>
      </form>
    </section>
  );
};

export { Login };
