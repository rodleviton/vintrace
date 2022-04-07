import { useEffect } from 'react';

/**
 * A React hook that triggers a callback when the user presses the escape key.
 * @param {Function} onEscape Callback for when the user presses the escape key.
 */
export default function useOnEscape(onEscape) {
  useEffect(() => {
    if (onEscape) {
      const onKeyDown = (event) => {
        if (event.keyCode === 27) onEscape(event);
      };

      // eslint-disable-next-line no-undef
      window.addEventListener('keydown', onKeyDown);

      return () => {
        // eslint-disable-next-line no-undef
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [onEscape]);
}
