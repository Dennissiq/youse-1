import { animateScroll } from 'react-scroll'
import API from '../../../services/api'
import { getQueryString } from '../../../helpers/url'
import { itemsPerPage } from '../../../constants'
import ApiStatesSetter from '../../../interfaces/ApiStatesSetter'

export const updateList = ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setIsLoading,
  setApiError
}: ApiStatesSetter) => {
  setIsLoading(true)
  const filter = getQueryString('filter') || ''
  const page = ~~getQueryString('page') || 0
  const limit = ~~getQueryString('limit') || itemsPerPage
  const skip = page * limit

  animateScroll.scrollToTop({
    duration: 400
  })

  API.fetch({
    filter,
    skip,
    limit
  })
    .then(({ filtredItems, everyPeopleThatMatchesFilter }) => {
      setApiError(0)
      setFiltredItems(filtredItems)
      setEveryPeopleThatMatchesFilter(everyPeopleThatMatchesFilter)
    })
    .catch(errCode => {
      setApiError(errCode)
    })
    .finally(() => {
      setIsLoading(false)
    })
}

export default ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setApiError,
  setIsLoading
}: ApiStatesSetter) => {
  const forceListUpdate = () =>
    updateList({
      setFiltredItems,
      setEveryPeopleThatMatchesFilter,
      setApiError,
      setIsLoading
    })

  return {
    forceListUpdate
  }
}
