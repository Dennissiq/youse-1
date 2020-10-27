import styled from 'styled-components'

export const SVGLoader = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  opacity: ${({ isLoading }: { isLoading: boolean }) =>
    isLoading ? '1' : '0'};
  animation: rotate infinite 2s 0.1s;
  transition: opacity 0.3s linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
