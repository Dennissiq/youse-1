import { useEffect } from 'react'
import { getQueryString } from '../../../helpers/url'
import ApiFetcher from '../../../interfaces/ApiFetcher'
import { updateList } from './useApiFetcher'

const updateSearchBoxValue = () => {
  const searchBox = document.getElementById('search-box') as HTMLInputElement
  searchBox.value = getQueryString('filter')
}

export default ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setApiError,
}: ApiFetcher) => {
  useEffect(() => {
    updateSearchBoxValue()
    updateList({
      setFiltredItems,
      setEveryPeopleThatMatchesFilter,
      setApiError,
    })
  }, [setFiltredItems, setEveryPeopleThatMatchesFilter, setApiError])
  return {}
}
