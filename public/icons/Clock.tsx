import * as React from "react"
import { SVGProps } from "react"
const ClockSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    fill="none"
  >
    <circle cx={21} cy={21.5} r={21} fill="#fff" />
    <path
      fill="#45BC1B"
      d="M20.5 9.75c6.213 0 11.25 5.037 11.25 11.25S26.713 32.25 20.5 32.25 9.25 27.213 9.25 21 14.287 9.75 20.5 9.75Zm0 2.25a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2.25a1.125 1.125 0 0 1 1.117.993l.008.132v5.16l3.045 3.045a1.125 1.125 0 0 1-1.485 1.684l-.105-.094-3.375-3.375a1.126 1.126 0 0 1-.32-.648l-.01-.147v-5.625A1.125 1.125 0 0 1 20.5 14.25Z"
    />
  </svg>
)
export default ClockSvg
