import React, { forwardRef } from 'react';
import Icon from './Icon';

const EditIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M23.625 5.375L21.1875 7.8125L16.1875 2.8125L18.625 0.375C18.875 0.125 19.1875 0 19.5625 0C19.9375 0 20.25 0.125 20.5 0.375L23.625 3.5C23.875 3.75 24 4.0625 24 4.4375C24 4.8125 23.875 5.125 23.625 5.375ZM0 19L14.75 4.25L19.75 9.25L5 24H0V19Z"
      fill="currentColor"
    />
  </Icon>
));

EditIcon.displayName = 'EditIcon';

export default EditIcon;
