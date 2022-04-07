import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

/**
 * Field message component
 */
const FieldMessage = forwardRef(({ children, id, ...props }, ref) => (
  <p id={id} ref={ref} {...props}>
    {children}
  </p>
));

FieldMessage.displayName = 'FieldMessage';
FieldMessage.propTypes = {
  /** React node */
  children: PropTypes.node,
  /** HTML id attribute */
  id: PropTypes.string,
};

export default FieldMessage;
