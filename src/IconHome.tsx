import React from "react";

interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
}

export const IconHome: React.FC<IconProps> = ({
    width = 32,
    height = 32,
    fill = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <polyline
            points="9 22 9 12 15 12 15 22"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
