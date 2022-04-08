import React, { forwardRef } from 'react';
import Icon from './Icon';

const LeftArrowIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M22.6875 10.6875V13.3125H6.4375L13.875 20.8125L12 22.6875L1.3125 12L12 1.3125L13.875 3.1875L6.4375 10.6875H22.6875Z"
      fill="currentColor"
    />
  </Icon>
));

LeftArrowIcon.displayName = 'LeftArrowIcon';

export default LeftArrowIcon;
