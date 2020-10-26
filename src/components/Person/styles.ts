import styled from 'styled-components'

export const Li = styled.li`
  padding: 30px 20px;
  border-top: 1px solid #ccc;
  &:last-of-type {
    border-bottom: 1px solid #ccc;
  }
  &:nth-child(even) {
    background-color: #6a418c;
  }
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const H3 = styled.h3`
  font-size: 14px;
`
