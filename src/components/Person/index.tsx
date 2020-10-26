import React from 'react'
import Person from '../../interfaces/Person'
import { Div, Article, H3, Span } from './styles'
import styled from 'styled-components'

export default ({ item, modifier }: { item: Person, modifier: number }) => 
  <Div modifier={modifier}>
    <Article>
      <H3>{item.title}</H3>
      <Span>{item.description}</Span>
    </Article>
  </Div>
