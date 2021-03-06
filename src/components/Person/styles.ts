import styled from 'styled-components'
import { darkPurple, lightPurple } from '../../constants'

export const Div = styled.div`
  padding: 30px 20px;
  background-color: ${({ modifier }: { modifier: number }) =>
    modifier % 2 === 0 ? lightPurple : darkPurple};

  transition: all 0.75s ease-in-out;
  opacity: 1;

  &.enter,
  &.exit {
    ${({ modifier }: { modifier: number }) =>
      modifier % 2 === 0
        ? `
    transform: translateX(-100vw);
    `
        : `
    transform: translateX(100vw);
    `}

    article {
      opacity: 0;
    }
  }

  &.exit {
    opacity: 0;
  }

  &.header {
    background-color: transparent;
  }

  position: relative;
  transform: translateX(0);

  article {
    transition: opacity 0.5s 0.5s linear;
    opacity: 1;
  }
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
`

export const H3 = styled.h3`
  font-size: 16px;
  ${({ header }: { header: boolean }) =>
    header ? `font-weight: bold;` : `font-weight: normal; color: #fff;`};
  @media (max-width: 320px) {
    font-size: 12px;
  }
`

export const Span = styled.span`
  ${({ header }: { header: boolean }) =>
    header
      ? `font-size: 16px;
  font-weight: bold;`
      : `font-size: 14px;
  font-weight: normal;
  color: #fff;`};
  @media (max-width: 320px) {
    font-size: 10px;
  }
`
