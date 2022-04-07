import useOnClickOut from './useOnClickOut';
import useOnEscape from './useOnEscape';
import useOnFocusOut from './useOnFocusOut';

/**
 * A React hook that triggers a callback when the user attempts to exiting an
 * element by either pressing the escape key, or by clicking or focusing an
 * element outside of it.
 *
 * Note that elements can be focused without a click via keyboard navigation,
 * and that some browsers don’t focus buttons on click.
 * @param {*} ref React ref for the container element.
 * @param {Function} onExit Callback for when the user exits the container element.
 */
export default function useOnExit(ref, onExit) {
  useOnEscape(onExit);
  useOnClickOut(ref, onExit);
  useOnFocusOut(ref, onExit);
}
