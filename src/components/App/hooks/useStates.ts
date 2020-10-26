import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  const [apiError, setApiError] = useState('')

  return {
    filtredItems,
    setFiltredItems,
    apiError,
    setApiError,
  }
}
