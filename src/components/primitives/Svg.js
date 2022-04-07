import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

/**
 * Safari does not support the transform attribute on SVGs so we need to remove it manually.
 * As a workaround we apply any transforms as an inline style attribute.
 * Read more here: {@link https://www.w3.org/TR/SVG/struct.html#SVGElement}
 */

/** Base SVG primitive */
const Svg = forwardRef(
  ({ children, transform, width, height, ...props }, ref) => (
    <svg
      transform={transform}
      width={width}
      height={height}
      ref={ref}
      style={{ transform }}
      {...props}>
      {children}
    </svg>
  ),
);

Svg.displayName = 'Svg';
Svg.propTypes = {
  /** React node */
  children: PropTypes.node.isRequired,
  /** css color property */
  color: PropTypes.string,
  /** css width property */
  width: PropTypes.number,
  /** css width property */
  height: PropTypes.number,
  /** svg transform attribute */
  transform: PropTypes.string,
};

export default Svg;
