/**
 * A React hook that returns a users default locale
 */
export default function useLocale() {
  if (navigator.languages !== undefined) return navigator.languages[0];
  return navigator.language;
}
