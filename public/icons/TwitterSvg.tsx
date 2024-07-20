import * as React from "react"
import { SVGProps } from "react"
const TwitterSvg = (props: SVGProps<SVGSVGElement>) => (
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
        d="M11.558 18.647c5.095 0 7.88-4.064 7.88-7.589 0-.115 0-.23-.007-.344a5.524 5.524 0 0 0 1.381-1.382 5.694 5.694 0 0 1-1.59.42 2.697 2.697 0 0 0 1.217-1.476 5.68 5.68 0 0 1-1.758.648 2.807 2.807 0 0 0-1.572-.807 2.865 2.865 0 0 0-1.757.281 2.713 2.713 0 0 0-1.216 1.252 2.579 2.579 0 0 0-.175 1.707 8.101 8.101 0 0 1-3.162-.81A7.815 7.815 0 0 1 8.252 8.57a2.583 2.583 0 0 0-.304 1.944A2.67 2.67 0 0 0 9.11 12.13a2.83 2.83 0 0 1-1.256-.334v.034c0 .616.22 1.213.626 1.69.405.476.969.803 1.596.925a2.867 2.867 0 0 1-1.251.045c.177.53.521.994.985 1.326a2.843 2.843 0 0 0 1.603.527 5.64 5.64 0 0 1-1.936.945 5.763 5.763 0 0 1-2.164.16 8.063 8.063 0 0 0 4.246 1.196"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.563.5h27v26h-27z" />
      </clipPath>
    </defs>
  </svg>
)
export default TwitterSvg;
