import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Svg from '../primitives/Svg';

/** Icon element */
const Icon = forwardRef(({ children, size = 24, ...props }, ref) => (
  <Svg width={size} height={size} {...props} ref={ref}>
    {children}
  </Svg>
));

Icon.displayName = 'Icon';
Icon.propTypes = {
  /** React node */
  children: PropTypes.node.isRequired,
  /** css color property */
  color: PropTypes.string,
  /** Icon size based on theme configuration */
  size: PropTypes.number,
};

export default Icon;
