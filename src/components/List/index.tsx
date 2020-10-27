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
    <CSSTransition in={!isLoading} timeout={200} unmountOnExit>
      <PersonDiv
        modifier={1}
        header
        item={{ id: 0, title: 'Name', description: 'Email' }}
      />
    </CSSTransition>
    {filtredItems.map((item: Person, key: number) => (
      <CSSTransition in={!isLoading} timeout={200} unmountOnExit key={item.id}>
        <PersonDiv header={false} modifier={key} item={item} />
      </CSSTransition>
    ))}
  </>
)
