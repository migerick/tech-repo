import React from "react";

interface Props {
    width?: number;
    height?: number;
    color?: string;
}

export const IconLogoTruck = ({width = 90, height = 40, color = "#000000"}: Props) => {
    return (
        <svg
            fill={color}
            width={width}
            height={height}
            viewBox="0 0 32 32" id="Camada_1" version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"></path>
            </g>
        </svg>
    );
};