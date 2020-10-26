import { updateQueryString } from '../../../helpers/url'

export default ({ updateList }: { updateList: Function }) => ({
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    updateQueryString('page', '0')
    updateQueryString('filter', value)
    updateList()
  },
  updatePagination: (selectedItem: { selected: number }) => {
    const { selected } = selectedItem
    updateQueryString('page', `${selected}`)
    updateList()
  },
})
