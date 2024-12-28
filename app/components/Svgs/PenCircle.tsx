import React from 'react'
interface Props {
  width?: string,
  height?: string,
  viewBox?: string,
  stroke?: string,
  strokeWidth?: string,
  strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined,
}
const PenCircle: React.FC<Props> = ({ width, height, stroke, strokeWidth, strokeLinecap, viewBox }) => {
  return (
    <svg
      width={width || "549"}
      height={height || "118"}
      viewBox={viewBox || "0 0 549 118"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M529.911 101.068C444.718 105.86 359.483 109.912 274.129 112.378C200.152 114.515 122.187 119.559 48.3166 111.936C19.2199 108.934 -2.3804 101.587 2.75883 75.4446C4.57913 66.1851 8.83331 55.7546 17.2495 48.9376C24.7598 42.8542 37.4037 36.8926 46.4504 33.3868C87.9782 17.2934 131.619 6.57393 177.854 3.69887C247.233 -0.615401 303.581 3.89573 373.258 10.414C404.589 13.3449 435.791 17.1754 466.899 21.3702C473.448 22.2533 523.295 28.8794 539.572 35.684C541.673 36.5624 548.749 45.562 546.597 47.7889C538.93 55.7239 524.843 56.1286 513.993 59.8055C477.182 72.2805 439.28 80.2863 403.447 94.7064"
        stroke={stroke || "black"} strokeWidth={strokeWidth || "3"} strokeLinecap={strokeLinecap || "round"} />
    </svg>

  )
}

export default PenCircle