import { useEffect, useRef } from 'react';
import './ModalWithForm.css';

const FOCUSABLE_ELEMENTS_SELECTOR =
  'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

function ModalWithForm({
  isOpen,
  name,
  title,
  submitText,
  children,
  alternateText,
  alternateButtonText,
  isSubmitDisabled,
  onAlternateClick,
  onClose,
  onSubmit,
}) {
  const modalRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const titleId = `${name}-modal-title`;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previouslyFocusedElement = document.activeElement;
    const animationFrameId = window.requestAnimationFrame(() => {
      modalRef.current?.querySelector(FOCUSABLE_ELEMENTS_SELECTOR)?.focus();
    });

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [isOpen]);

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onMouseDown={handleOverlayMouseDown}>
      <section
        className="modal__container"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          className="modal__close"
          type="button"
          aria-label={`Close ${title}`}
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="modal__title" id={titleId}>
          {title}
        </h2>
        <form className="modal__form" name={name} noValidate onSubmit={onSubmit}>
          {children}
          <button
            className="modal__submit"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {submitText}
          </button>
        </form>
        <p className="modal__alternate">
          {alternateText}{' '}
          <button
            className="modal__alternate-button"
            type="button"
            onClick={onAlternateClick}
          >
            {alternateButtonText}
          </button>
        </p>
      </section>
    </div>
  );
}

export default ModalWithForm;
