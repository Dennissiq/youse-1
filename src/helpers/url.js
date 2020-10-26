export const updateQueryString = (key, value) => {
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.set(key, value)
  var newurl = `${window.location.protocol}//${window.location.host}${
    window.location.pathname
  }?${urlParams.toString()}`
  window.history.pushState({ path: newurl }, '', newurl)
}

export const getQueryString = (key) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(key)
}
