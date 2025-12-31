import React from "react";

export const Loader = ({ size = 150, className = "" }) => {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 50 50"
        aria-hidden="true"
        role="img"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke="#e6e6e6"
        />
        <path
          fill="none"
          stroke="#1f2937"
          strokeWidth="5"
          strokeLinecap="round"
          d="M45 25a20 20 0 0 1-20 20"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
};
