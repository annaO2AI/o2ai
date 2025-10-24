import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export default function AiCallSummary({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
  return (
     <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="70" rx="6" fill="url(#paint0_linear_4432_8265)"/>
      <rect width="70" height="60" transform="translate(0 5)" fill="white" fillOpacity="0.02"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M35 39.7368C38.2015 39.7368 40.7856 37.1978 40.7856 34.0527V22.6842C40.7856 19.5389 38.2015 17 35 17C31.7985 17 29.2143 19.5389 29.2143 22.6842V34.0527C29.2143 37.1978 31.7985 39.7368 35 39.7368ZM33.0715 22.6842C33.0715 21.6421 33.9394 20.7895 35 20.7895C36.0606 20.7895 36.9285 21.6421 36.9285 22.6842V34.0527C36.9285 35.1137 36.08 35.9473 35 35.9473C33.9394 35.9473 33.0715 35.0947 33.0715 34.0527V22.6842ZM45.2215 34.0527H48.5C48.5 40.5136 43.2543 45.8569 36.9285 46.7853V53H33.0715V46.7853C26.7457 45.8569 21.5 40.5136 21.5 34.0527H24.7786C24.7786 39.7368 29.6772 43.7158 35 43.7158C40.3228 43.7158 45.2215 39.7368 45.2215 34.0527Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_4432_8265" x1="24.5" y1="23" x2="70.5" y2="70" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0E78BC"/>
      <stop offset="1" stopColor="#4938CF"/>
      </linearGradient>
      </defs>
    </svg>
  );
}