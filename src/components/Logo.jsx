import React from "react";

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#ffdd40" />
      <text
        x="50%"
        y="55%"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
      >
        AP
      </text>
    </svg>
  );
};

export default Logo;
