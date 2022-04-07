import { useEffect } from 'react';

/**
 * A React hook that triggers a callback when the user focuses outside an
 * element.
 * @param {object} ref React ref for the element.
 * @param {Function} onFocusOut Callback for when the user focuses outside the element.
 */
export default function useOnFocusOut(ref, onFocusOut) {
  useEffect(() => {
    if (onFocusOut) {
      const onFocusIn = (event) => {
        if (ref.current && !ref.current.contains(event.target))
          onFocusOut(event);
      };

      // eslint-disable-next-line no-undef
      document.addEventListener('focusin', onFocusIn);

      return () => {
        // eslint-disable-next-line no-undef
        document.removeEventListener('focusin', onFocusIn);
      };
    }
  }, [ref, onFocusOut]);
}
