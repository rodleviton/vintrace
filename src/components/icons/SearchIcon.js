import React, { forwardRef } from 'react';
import Icon from './Icon';

const SearchIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      d="M7.27344 12.5859C8.0026 13.3151 8.88802 13.6797 9.92969 13.6797C10.9714 13.6797 11.8568 13.3151 12.5859 12.5859C13.3151 11.8568 13.6797 10.9714 13.6797 9.92969C13.6797 8.88802 13.3151 8.0026 12.5859 7.27344C11.8568 6.54427 10.9714 6.17969 9.92969 6.17969C8.88802 6.17969 8.0026 6.54427 7.27344 7.27344C6.54427 8.0026 6.17969 8.88802 6.17969 9.92969C6.17969 10.9714 6.54427 11.8568 7.27344 12.5859ZM14.9297 13.6797L19.0703 17.8203L17.8203 19.0703L13.6797 14.9297V14.2656L13.4453 14.0312C12.4557 14.8906 11.2839 15.3203 9.92969 15.3203C8.41927 15.3203 7.13021 14.7995 6.0625 13.7578C5.02083 12.7161 4.5 11.4401 4.5 9.92969C4.5 8.41927 5.02083 7.14323 6.0625 6.10156C7.13021 5.03385 8.41927 4.5 9.92969 4.5C11.4401 4.5 12.7161 5.03385 13.7578 6.10156C14.7995 7.14323 15.3203 8.41927 15.3203 9.92969C15.3203 10.4766 15.1901 11.1016 14.9297 11.8047C14.6693 12.4818 14.3698 13.0286 14.0313 13.4453L14.2656 13.6797H14.9297Z"
      fill="currentColor"
    />
  </Icon>
));

SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;