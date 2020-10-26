import { updateQueryString } from '../../../helpers/url'

export default ({ updateList }: { updateList: Function }) => ({
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    updateQueryString('filter', value)
    updateList()
  },
  updatePagination: (selectedItem: { selected: number }) => {
    const { selected } = selectedItem
    console.log(selected)
    updateQueryString('page', `${selected}`)
    updateList()
  },
})
