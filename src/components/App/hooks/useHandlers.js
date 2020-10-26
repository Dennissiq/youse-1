import { updateQueryString } from '../../../helpers/url'

export default ({ updateList }) => ({
  onInputChange: (e) => {
    const { value } = e.currentTarget
    updateQueryString('filter', value)
    updateList()
  },
})
