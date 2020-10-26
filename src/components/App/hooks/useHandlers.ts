import { updateQueryString } from '../../../helpers/url'

export default ({ forceListUpdate }: { forceListUpdate: Function }) => ({
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    updateQueryString('page', '0')
    updateQueryString('filter', value)
    forceListUpdate()
  },
  onPaginationItemClick: (selectedItem: { selected: number }) => {
    const { selected } = selectedItem
    updateQueryString('page', `${selected}`)
    forceListUpdate()
  },
})
