import * as React from "react"
import { SVGProps } from "react"
const LinkedinSvg = (props: SVGProps<SVGSVGElement>) => (
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
        fillRule="evenodd"
        d="M20.27 17.834h-2.334v-3.52c0-.839-.016-1.918-1.213-1.918-1.215 0-1.402.913-1.402 1.857v3.58h-2.334v-7.236h2.24v.989h.032c.311-.57 1.073-1.169 2.21-1.169 2.364 0 2.8 1.499 2.8 3.447v3.97Zm-9.915-8.226c-.359 0-.703-.138-.957-.382A1.28 1.28 0 0 1 9 8.303c0-.345.143-.677.397-.922.254-.244.598-.382.957-.382.36 0 .704.138.958.382.254.245.397.577.397.922 0 .346-.143.678-.397.923a1.381 1.381 0 0 1-.958.382Zm-1.168 8.226h2.335v-7.237H9.187v7.237Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.563.5h27v26h-27z" />
      </clipPath>
    </defs>
  </svg>
)
export default LinkedinSvg;
