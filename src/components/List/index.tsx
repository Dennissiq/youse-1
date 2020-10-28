import React from 'react'
import { CSSTransition } from 'react-transition-group'
import PersonDiv from '../Person'
import Person from '../../interfaces/Person'

export default ({
  filtredItems,
  isLoading,
}: {
  filtredItems: Array<Person>
  isLoading: boolean
}) => (
  <>
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
          exit: 0,
        }}
        unmountOnExit
        key={item.id}
      >
        <PersonDiv header={false} modifier={key} item={item} />
      </CSSTransition>
    ))}
  </>
)
