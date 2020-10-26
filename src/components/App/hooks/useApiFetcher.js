import API from '../../../services/api'
import { getQueryString } from '../../../helpers/url'

export default ({ setFiltredItems, setApiError }) => {
  const updateList = () => {
    const filter = getQueryString('filter') || ''
    const page = ~~getQueryString('page') || 0
    const limit = ~~getQueryString('limit') || 10
    const skip = page * limit

    API.fetch({
      filter,
      skip,
      limit,
    })
      .then((response) => {
        setFiltredItems(response)
        const apiError = response.length
          ? false
          : `No results was found for ${filter} :(`
        setApiError(apiError)
      })
      .catch((err) => {
        setApiError(err)
      })
  }

  return {
    updateList,
  }
}
