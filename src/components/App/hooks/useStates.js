import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  const [apiError, setApiError] = useState(false)

  return {
    filtredItems,
    setFiltredItems,
    apiError,
    setApiError
  }
}
