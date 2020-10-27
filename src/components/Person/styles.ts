import styled from 'styled-components'

export const Div = styled.div`
  padding: 30px 20px;
  background-color: ${({ modifier }: { modifier: number }) =>
    modifier % 2 === 0 ? '#6a418c' : '#7d3caf'};
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
