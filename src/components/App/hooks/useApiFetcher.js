import API from '../../../services/api'

export default ({ setFiltredItems }) => {
  const updateResult = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const filter = urlParams.get('filter') || ''
    const skip = ~~urlParams.get('skip')
    const limit = ~~urlParams.get('limit')

    API.fetch({
      filter,
      skip,
      limit,
    })
      .then((response) => {
        setFiltredItems(response)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  return {
    updateResult,
  }
}
