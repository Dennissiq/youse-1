import styled from 'styled-components'

export const Div = styled.div`
  padding: 30px 20px;
  background-color: ${(props: { modifier: number }) =>
    props.modifier % 2 === 0 ? '#6a418c' : '#7d3caf'};
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
  @media (max-width: 320px) {
    font-size: 12px;
  }
`

export const Span = styled.span`
  font-size: 14px;
  @media (max-width: 320px) {
    font-size: 10px;
  }
`
