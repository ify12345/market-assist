import * as React from "react"
import { SVGProps } from "react"
const LocationSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    fill="none"
  >
    <circle cx={21} cy={21.5} r={21} fill="#fff" />
    <path
      stroke="#45BC1B"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.313 18.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z"
    />
    <path
      stroke="#45BC1B"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.375 18.688c0 3.417-2.25 7.312-6.188 11.812C17.25 26 15 22.105 15 18.687a6.187 6.187 0 0 1 12.375 0Z"
    />
  </svg>
)
export default LocationSvg
