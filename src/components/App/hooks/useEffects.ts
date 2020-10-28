import { useEffect } from 'react'
import { getQueryString } from '../../../helpers/url'
import ApiStatesSetter from '../../../interfaces/ApiStatesSetter'
import { updateList } from './useApiFetcher'

const updateSearchBoxValue = () => {
  const searchBox = document.getElementById('search-box') as HTMLInputElement
  searchBox.value = getQueryString('filter')
}

export default ({
  setFiltredItems,
  setEveryPeopleThatMatchesFilter,
  setApiError,
  setIsLoading
}: ApiStatesSetter) => {
  useEffect(() => {
    updateSearchBoxValue()
    updateList({
      setFiltredItems,
      setEveryPeopleThatMatchesFilter,
      setApiError,
      setIsLoading
    })
  }, [
    setFiltredItems,
    setEveryPeopleThatMatchesFilter,
    setApiError,
    setIsLoading
  ])

  return {}
}
