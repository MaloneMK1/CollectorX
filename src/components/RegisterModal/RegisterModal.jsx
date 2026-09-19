import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';

function RegisterModal({ isOpen, onClose, onOpenLogin }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      name="register"
      title="Register"
      submitText="Register"
      alternateText="Already have an account?"
      alternateButtonText="Login"
      onAlternateClick={onOpenLogin}
      onClose={onClose}
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
          required
        />
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
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
