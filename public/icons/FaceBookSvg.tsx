import * as React from "react"
import { SVGProps } from "react"
const FaceBookSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={27}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        d="M14.063 26.175c7.27 0 13.162-5.675 13.162-12.675 0-7-5.893-12.675-13.162-12.675C6.793.825.9 6.5.9 13.5c0 7 5.893 12.675 13.163 12.675Z"
      />
      <path
        fill="#fff"
        d="M15.225 20v-5.922H17.3l.31-2.318h-2.385v-1.476c0-.67.195-1.124 1.193-1.124h1.275V7.09A18.33 18.33 0 0 0 15.842 7c-1.834 0-3.085 1.077-3.085 3.055v1.705h-2.07v2.318h2.07V20h2.468Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.563.5h27v26h-27z" />
      </clipPath>
    </defs>
  </svg>
)
export default FaceBookSvg;