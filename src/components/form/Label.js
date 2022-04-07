import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

/**
 * Accessible input label component
 */
const Label = forwardRef(({ id, htmlFor, children, ...props }, ref) => (
  <label id={id} htmlFor={htmlFor} ref={ref} {...props}>
    {children}
  </label>
));

Label.displayName = 'Label';
Label.propTypes = {
  /** React node */
  children: PropTypes.node,
  /** HTML id attribute */
  id: PropTypes.string,
  /** Accessibility attribute to associate label with from field */
  htmlFor: PropTypes.string,
};

export default Label;
