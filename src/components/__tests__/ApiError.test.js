import React from 'react'
import renderer from 'react-test-renderer'
import ApiError from '../ApiError'

it('renders correctly', () => {
  const tree = renderer.create(<ApiError text="Error" />).toJSON()
  expect(tree).toMatchSnapshot()
})
