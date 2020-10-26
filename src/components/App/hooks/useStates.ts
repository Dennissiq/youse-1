import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  const [apiError, setApiError] = useState('')
  const [
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter,
  ] = useState([])

  return {
    filtredItems,
    setFiltredItems,
    apiError,
    setApiError,
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter,
  }
}
