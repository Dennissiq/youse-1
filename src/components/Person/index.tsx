import React from 'react'
import Person from '../../interfaces/Person'
import { Div, Article, H3, Span } from './styles'

export default ({
  item,
  modifier,
  header,
}: {
  item: Person
  modifier: number
  header: boolean
}) => (
  <Div className={header ? 'header' : ''} modifier={modifier}>
    <Article>
      <H3 header={header}>{item.title}</H3>
      <Span header={header}>{item.description}</Span>
    </Article>
  </Div>
)
