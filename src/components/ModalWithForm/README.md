# ModalWithForm

Reusable accessible dialog and form shell used by LoginModal and RegisterModal.
It handles the close button, guarded overlay dismissal, Escape dismissal, focus
containment, focus restoration, and listener cleanup. Form submission is
delegated to the wrapper component, allowing LoginModal and RegisterModal to use
the shared `useForm` validation flow.
