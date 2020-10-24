import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  return {
    filtredItems,
    setFiltredItems,
  }
}
