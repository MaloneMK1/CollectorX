import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const { name, value, validationMessage, form } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validationMessage,
    }));
    setIsValid(form.checkValidity());
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setIsValid(false);
  }

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
}

export default useForm;
