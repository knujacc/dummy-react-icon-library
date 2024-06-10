import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
}

export const IconUser: React.FC<IconProps> = ({width= 32, height = 32, fill = 'currentColor'}) => (
    <svg 
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill='none'
        xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="7" r="4" stroke={fill} strokeWidth="2" strokeLinecap='round' strokeLinejoin='round'></circle>
            <path d="M5.5 21a7.5 7.5 0 0 1 13 0" stroke={fill} strokeWidth="2" strokeLinecap='round' strokeLinejoin='round'></path>
        </svg>
)