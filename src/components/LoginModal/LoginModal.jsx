import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
import useForm from '../../hooks/useForm.js';

const LOGIN_INITIAL_VALUES = {
  email: '',
  password: '',
};

function LoginModal({ isOpen, onClose, onOpenRegister, onLogin }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm(
    LOGIN_INITIAL_VALUES,
  );

  function handleClose() {
    resetForm();
    onClose();
  }

  function handleOpenRegister() {
    resetForm();
    onOpenRegister();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    resetForm();
    onLogin();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name="login"
      title="Login"
      submitText="Login"
      alternateText="New to CollectorX?"
      alternateButtonText="Register"
      isSubmitDisabled={!isValid}
      onAlternateClick={handleOpenRegister}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__field" htmlFor="login-email">
        <span className="modal__label">Email</span>
        <input
          className="modal__input"
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="collector@example.com"
          value={values.email}
          aria-describedby="login-email-error"
          aria-invalid={Boolean(errors.email)}
          onChange={handleChange}
          required
        />
        <span className="modal__input-error" id="login-email-error">
          {errors.email}
        </span>
      </label>
      <label className="modal__field" htmlFor="login-password">
        <span className="modal__label">Password</span>
        <input
          className="modal__input"
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          minLength={8}
          value={values.password}
          aria-describedby="login-password-error"
          aria-invalid={Boolean(errors.password)}
          onChange={handleChange}
          required
        />
        <span className="modal__input-error" id="login-password-error">
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
