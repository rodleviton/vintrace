import { useEffect } from 'react';

/**
 * A React hook that triggers a callback when the user clicks outside an
 * element.
 * @param {object} ref React ref for the element.
 * @param {Function} onClickOut Callback for when the user clicks outside the element.
 */
export default function useOnClickOut(ref, onClickOut) {
  useEffect(() => {
    if (onClickOut) {
      const onClick = (event) => {
        if (ref.current && !ref.current.contains(event.target))
          onClickOut(event);
      };

      // eslint-disable-next-line no-undef
      document.addEventListener('click', onClick);

      return () => {
        // eslint-disable-next-line no-undef
        document.removeEventListener('click', onClick);
      };
    }
  }, [ref, onClickOut]);
}
