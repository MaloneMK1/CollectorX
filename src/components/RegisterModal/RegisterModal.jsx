import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
import useForm from '../../hooks/useForm.js';

const REGISTER_INITIAL_VALUES = {
  email: '',
  password: '',
};

function RegisterModal({ isOpen, onClose, onOpenLogin, onRegister }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm(
    REGISTER_INITIAL_VALUES,
  );

  function handleClose() {
    resetForm();
    onClose();
  }

  function handleOpenLogin() {
    resetForm();
    onOpenLogin();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    resetForm();
    onRegister();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name="register"
      title="Register"
      submitText="Register"
      alternateText="Already have an account?"
      alternateButtonText="Login"
      isSubmitDisabled={!isValid}
      onAlternateClick={handleOpenLogin}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__field" htmlFor="register-email">
        <span className="modal__label">Email</span>
        <input
          className="modal__input"
          id="register-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="collector@example.com"
          value={values.email}
          aria-describedby="register-email-error"
          aria-invalid={Boolean(errors.email)}
          onChange={handleChange}
          required
        />
        <span className="modal__input-error" id="register-email-error">
          {errors.email}
        </span>
      </label>
      <label className="modal__field" htmlFor="register-password">
        <span className="modal__label">Password</span>
        <input
          className="modal__input"
          id="register-password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          minLength={8}
          value={values.password}
          aria-describedby="register-password-error"
          aria-invalid={Boolean(errors.password)}
          onChange={handleChange}
          required
        />
        <span className="modal__input-error" id="register-password-error">
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
