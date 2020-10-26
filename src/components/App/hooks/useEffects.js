import { useEffect } from 'react'
import { getQueryString } from '../../../helpers/url'

const updateSearchBoxValue = () => {
  const searchBox = document.getElementById('search-box')
  searchBox.value = getQueryString('filter')
}

export default ({ updateList }) => {
  useEffect(() => {
    updateSearchBoxValue()
    updateList()
  }, [])
  return {}
}
