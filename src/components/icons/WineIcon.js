import React, { forwardRef } from 'react';
import Icon from './Icon';

const WineIcon = forwardRef(({ ...props }, ref) => (
  <Icon viewBox="0 0 32 32" ref={ref} {...props}>
    <path
      opacity="0.01"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="#E6D395"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="#D20039"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="url(#paint0_linear_2333_2282)"
    />
    <g style={{ mixBlendMode: 'multiply' }} opacity="0.2">
      <path
        d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
        stroke="#979797"
      />
    </g>
    <path
      d="M23.79 10.5L20.25 21H19.08L16.005 12.045L12.915 21H11.76L8.22004 10.5H9.36004L12.39 19.53L15.525 10.5H16.56L19.65 19.575L22.725 10.5H23.79Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2333_2282"
        x1="-16"
        y1="16"
        x2="16"
        y2="48"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="#818181" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </Icon>
));

WineIcon.displayName = 'WineIcon';

export default WineIcon;
