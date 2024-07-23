import * as React from "react"
import { SVGProps } from "react"
const SupportSvg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21.634a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path stroke="#002100" d="M12 18.134a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <path
      stroke="#002100"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14.634v-.654c0-.813.495-1.544 1.25-1.846a1.988 1.988 0 0 0 1.25-1.846v-.27a2.385 2.385 0 0 0-2.385-2.384H12a2.5 2.5 0 0 0-2.5 2.5v.5"
    />
  </svg>
)
export default SupportSvg;
