import API from '../../../services/api'
import { getQueryString } from '../../../helpers/url'
import { itemsPerPage } from '../../../constants'

interface ApiFetcher {
  setFiltredItems: React.Dispatch<React.SetStateAction<string>>
  setApiError: React.Dispatch<React.SetStateAction<string>>
  setEveryPeopleThatMatchesFilter: React.Dispatch<React.SetStateAction<string>>
}

export default ({
  setFiltredItems,
  setApiError,
  setEveryPeopleThatMatchesFilter,
}: ApiFetcher) => {
  const updateList = () => {
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

  return {
    updateList,
  }
}
