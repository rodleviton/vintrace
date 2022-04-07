import { useEffect } from 'react';

/**
 * A React hook that sets a custom validation message on a HTML form control
 * element using the standard Constraint Validation API. Taken from
 * @param {object|null} ref React ref for the HTML form control element.
 * @param {string} [validationMessage=''] Validation message for the HTML form control element.
 */
export default function useCustomValidity(ref, validationMessage = '') {
  useEffect(() => {
    if (ref.current) ref.current.setCustomValidity(validationMessage);
  }, [ref, validationMessage]);
}
