import React from 'react'
import renderer from 'react-test-renderer'
import List from '../List'

it('renders correctly', () => {
  const filtredItems = [
    {
      description: 'Ahmad31@yahoo.com',
      id: 0,
      title: 'Estefania Kunze',
    },
  ]

  const tree = renderer
    .create(<List isLoading={false} filtredItems={filtredItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
