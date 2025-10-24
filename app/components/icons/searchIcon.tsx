import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export default function SearchIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.0846" cy="10.0833" r="6.41667" stroke="white"/>
        <path d="M18.332 18.3334L15.582 15.5834" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
  );
}