import API from '../../../services/api'
import { getQueryString } from '../../../helpers/url'
import { itemsPerPage } from '../../../constants'
import ApiFetcher from '../../../interfaces/ApiFetcher'

export const updateList = ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setApiError,
}: ApiFetcher) => {
  const filter = getQueryString('filter') || ''
  const page = ~~getQueryString('page') || 0
  const limit = ~~getQueryString('limit') || itemsPerPage
  const skip = page * limit

  API.fetch({
    filter,
    skip,
    limit,
  })
    .then(({ filtredItems, everyPeopleThatMatchesFilter }) => {
      setFiltredItems(filtredItems)
      setEveryPeopleThatMatchesFilter(everyPeopleThatMatchesFilter)
      const apiError = filtredItems.length
        ? ''
        : `No results was found for ${filter} :(`
      setApiError(apiError)
    })
    .catch((err) => {
      setApiError(err)
    })
}

export default ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setApiError,
}: ApiFetcher) => {
  const forceListUpdate = () =>
    updateList({
      setFiltredItems,
      setEveryPeopleThatMatchesFilter,
      setApiError,
    })

  return {
    updateList,
    forceListUpdate,
  }
}
