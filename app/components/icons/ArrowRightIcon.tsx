import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export default function ArrowRightIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 0L5.9955 0.975146L11.3204 6.3H0V7.7H11.3204L6.0102 13.0102L7 14C9.5627 11.4373 11.5472 9.4528 14 7L7 0Z" fill="white"/>
      </svg>
  );
}