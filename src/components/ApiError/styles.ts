import styled from 'styled-components'
import { yellow } from '../../constants'

export const ApiError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SVGWarning = styled.svg`
  height: 60px;
  fill: ${yellow};
  margin-bottom: 12px;
`
