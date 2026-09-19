import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';

function LoginModal({ isOpen, onClose, onOpenRegister }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      name="login"
      title="Login"
      submitText="Login"
      alternateText="New to CollectorX?"
      alternateButtonText="Register"
      onAlternateClick={onOpenRegister}
      onClose={onClose}
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
          required
        />
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
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
