import { useEffect } from 'react'
import { getQueryString } from '../../../helpers/url'

const updateSearchBoxValue = () => {
  const searchBox = document.getElementById('search-box') as HTMLInputElement
  searchBox.value = getQueryString('filter')
}

export default ({ updateList }: { updateList: Function }) => {
  useEffect(() => {
    updateSearchBoxValue()
    updateList()
  }, [])
  return {}
}
