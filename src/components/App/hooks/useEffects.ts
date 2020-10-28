import { useEffect } from 'react'
import { getQueryString } from '../../../helpers/url'
import AppEffects from '../../../interfaces/AppEffects'
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
}: AppEffects) => {
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
