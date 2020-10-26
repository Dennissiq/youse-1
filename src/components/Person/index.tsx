import React from 'react'
import Person from '../../interfaces/Person'
import { Li, Article, H3, Span } from './styles'

export default ({ item }: { item: Person }) => {
  return (
    <Li>
      <Article>
        <H3>{item.title}</H3>
        <Span>{item.description}</Span>
      </Article>
    </Li>
  )
}
