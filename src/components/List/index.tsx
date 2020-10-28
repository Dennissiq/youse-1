import React from 'react'
import { CSSTransition } from 'react-transition-group'
import PersonDiv from '../Person'
import Person from '../../interfaces/Person'
import List from './styles'

export default ({
  filtredItems,
  isLoading
}: {
  filtredItems: Array<Person>
  isLoading: boolean
}) => (
  <List>
    <PersonDiv
      modifier={0}
      header
      item={{ id: 0, title: 'Name', description: 'Email' }}
    />
    {filtredItems.map((item: Person, key: number) => (
      <CSSTransition
        in={!isLoading}
        timeout={{
          enter: key * 100,
          exit: 500
        }}
        key={item.id}
      >
        <PersonDiv header={false} modifier={key} item={item} />
      </CSSTransition>
    ))}
  </List>
)
