import API from '../../../services/api'
import { getQueryString } from '../../../helpers/url'

export default ({ setFiltredItems, setApiError }) => {
  const updateList = () => {
    const filter = getQueryString('filter') || ''
    const skip = ~~getQueryString('skip')
    const limit = ~~getQueryString('limit')

    API.fetch({
      filter,
      skip,
      limit,
    })
      .then((response) => {
        setFiltredItems(response)
      })
      .catch((err) => {
        setApiError(true)
      })
  }

  return {
    updateList,
  }
}
