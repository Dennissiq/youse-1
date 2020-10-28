import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from '../List'
import Person from '../Person'
import { filtredItems } from '../__mocks__'

Enzyme.configure({ adapter: new Adapter() })

describe('<List />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<List isLoading={false} filtredItems={filtredItems} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('lists', () => {
    const wrapper = shallow(<List filtredItems={filtredItems} />)

    expect(wrapper.find(Person).length).toEqual(21)
  })
})
