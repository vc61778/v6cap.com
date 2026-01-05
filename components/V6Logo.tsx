import React from 'react';

interface V6LogoProps {
  className?: string;
}

/**
 * V6 Capital Logo
 * 
 * Geometry:
 * - Outer Hexagon: Regular hexagon with uniform rounded corners.
 * - Center: (50, 50).
 * - Radius: ~44 units.
 * - Rounding Offset: 8 units.
 * - Stroke: 6 units.
 * - ViewBox: Calculated to tightly fit the geometry + stroke (approx 9 3 82 94).
 */
export const V6Logo: React.FC<V6LogoProps> = ({ className = "h-24 w-auto" }) => {
  return (
    <svg
      viewBox="9 3 82 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="V6 Capital Logo"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 
        Perfectly Regular Rounded Hexagon 
        Path constructed using 6-way symmetry.
        Corner Radius logic applied uniformly to all vertices.
      */}
      <path
        d="
          M 57 10
          L 81 24
          Q 88 28 88 36
          L 88 64
          Q 88 72 81 76
          L 57 90
          Q 50 94 43 90
          L 19 76
          Q 12 72 12 64
          L 12 36
          Q 12 28 19 24
          L 43 10
          Q 50 6 57 10
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* 
        V Geometry
        Centered vertically and horizontally within the new 50,50 coordinate space.
        Sharp miter join for crisp corners.
      */}
      <path
        d="M32 38 L50 72 L68 38"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
