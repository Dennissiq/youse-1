import React from 'react'
import renderer from 'react-test-renderer'
import Person from '../Person'

it('renders correctly', () => {
  const tree = renderer
    .create(<Person item={{ title: 'Mock title', description: 'Mock desc' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
