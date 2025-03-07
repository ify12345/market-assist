import * as React from "react"
import { SVGProps } from "react"
const UncertaintySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    fill="none"
  >
    <circle cx={21} cy={21.429} r={21} fill="#F5FBF3" />
    <path
      fill="#002100"
      d="m34 33.801-2.7-2.7a5.184 5.184 0 0 0 .772-2.7c0-2.7-2.122-4.821-4.822-4.821S22.43 25.7 22.43 28.4c0 2.7 2.121 4.821 4.821 4.821.965 0 1.929-.289 2.7-.77l2.7 2.7 1.35-1.35Zm-9.642-5.4c0-1.64 1.253-2.893 2.892-2.893 1.64 0 2.893 1.254 2.893 2.893 0 1.64-1.253 2.893-2.893 2.893-1.639 0-2.892-1.254-2.892-2.893Zm-11.572-6.75h9.643v1.929h-9.643V21.65Zm0-5.786h11.572v1.929H12.786v-1.929Z"
    />
    <path
      fill="#002100"
      d="m18.571 32.933-5.014-2.7c-2.893-1.446-4.628-4.435-4.628-7.618V10.08h19.285v10.607h1.929V10.08c0-1.061-.868-1.929-1.929-1.929H8.93C7.868 8.151 7 9.02 7 10.08v12.535c0 3.954 2.121 7.522 5.593 9.354l5.978 3.182v-2.218Z"
    />
  </svg>
)
export default UncertaintySvg
