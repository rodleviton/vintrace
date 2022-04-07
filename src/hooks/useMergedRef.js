import { useEffect, useRef } from "react";

/**
 * A React hook that merges multiple React refs into one to use on an element.
 * @param {Array<string|object|Function|null>} refs React refs.
 * @returns {object} React ref.
 */
export default function useMergedRef(refs) {
  const mergedRef = useRef();

  useEffect(
    () => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === "function") ref(mergedRef.current);
        else ref.current = mergedRef.current;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );

  return mergedRef;
}
