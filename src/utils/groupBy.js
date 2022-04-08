/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * @param {Array} values - The collection to iterate over
 * @param {Function} key - The iteratee to transform keys.
 * @returns {object} - Returns the composed aggregate object.
 */
const groupBy = (values, key) => {
  if (!Array.isArray(values)) return {};

  const keyFn = typeof key === 'function' ? key : (item) => item[key];

  return values.reduce(
    (acc, tag) => ({
      ...acc,
      [keyFn(tag)]: [...(acc[keyFn(tag)] || []), tag],
    }),
    {}
  );
};

export default groupBy;
