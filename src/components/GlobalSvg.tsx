import * as React from "react"
import { SVGProps } from "react"
const GlobalSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
  >
    <path
      stroke="#002100"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21.134a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#002100"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 4.634c-1.5.5-3.5 1.5-3.5 3.5s2 2 2.5 3 0 4-1 6c-.75 1.5 6-1.5 6-4.5l-4-8Zm-9.5.5c.833.5 2.5.8 2.5 2 0 1.5-1.5 0-3 2.5-.833 1.388-3.167.333-3.5 0l4-4.5Zm4 11c.667.5.5 1.57-1.5 1-2-.572-3.139-2.475-3.5-3.5-.338-.848-.931-2.284.5-3 1-.5 2 0 3 1s-.26 3.18 1.5 4.5Z"
    />
  </svg>
)
export default GlobalSvg
