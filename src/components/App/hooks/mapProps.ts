import { getQueryString } from '../../../helpers/url'
import { itemsPerPage } from '../../../constants'
import Person from '../../../interfaces/Person'

export default ({
  everyPeopleThatMatchesFilter
}: {
  everyPeopleThatMatchesFilter: Array<Person>
}) => {
  const getCurrentPage = () => {
    return ~~getQueryString('page') || 0
  }

  const getLimit = () => {
    return ~~getQueryString('limit') || itemsPerPage
  }

  const getPageCount = () => {
    return everyPeopleThatMatchesFilter.length / getLimit()
  }

  return {
    currentPage: getCurrentPage(),
    pageCount: getPageCount()
  }
}
