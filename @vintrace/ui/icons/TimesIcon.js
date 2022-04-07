import React, { forwardRef } from 'react';
import Icon from './Icon';

const TimesIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M17.8203 7.35156L13.1719 12L17.8203 16.6484L16.6484 17.8203L12 13.1719L7.35156 17.8203L6.17969 16.6484L10.8281 12L6.17969 7.35156L7.35156 6.17969L12 10.8281L16.6484 6.17969L17.8203 7.35156Z"
      fill="currentColor"
    />
  </Icon>
));

TimesIcon.displayName = 'TimesIcon';

export default TimesIcon;
