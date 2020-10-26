import React from 'react'
import Person from '../../interfaces/Person'
import { Li, Article, H3 } from './styles'

export default ({ item }: { item: Person }) => {
  return (
    <Li>
      <Article>
        <H3>{item.title}</H3>
        <span>{item.description}</span>
      </Article>
    </Li>
  )
}
