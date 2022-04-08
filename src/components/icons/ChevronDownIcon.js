import React, { forwardRef } from 'react';
import Icon from './Icon';

const ChevronDownIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M24.4102 7.40984L21.5902 4.58984L12.4102 13.7498L3.23016 4.58984L0.410156 7.40984L12.4102 19.4098L24.4102 7.40984Z"
      fill="currentColor"
    />
  </Icon>
));

ChevronDownIcon.displayName = 'ChevronDownIcon';

export default ChevronDownIcon;
