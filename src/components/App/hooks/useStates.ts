import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  const [apiError, setApiError] = useState('')
  const [
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter,
  ] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return {
    filtredItems,
    setFiltredItems,
    apiError,
    setApiError,
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter,
    isLoading,
    setIsLoading
  }
}
