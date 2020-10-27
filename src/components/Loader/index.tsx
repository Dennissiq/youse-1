import { SVGLoader } from './styles'
import React from 'react'

export default ({ isLoading }: { isLoading: boolean }) => (
  <SVGLoader
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
    isLoading={isLoading}
  >
    <g>
      <path
        d="M50 24a26 26 0 1024.727 17.966"
        fill="none"
        stroke="#7d3caf"
        stroke-width="14"
      />
      <path d="M49 7v34l17-17L49 7" fill="#7d3caf" />
    </g>
  </SVGLoader>
)
