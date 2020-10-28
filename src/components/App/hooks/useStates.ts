import { useState } from 'react'

export default () => {
  const [filtredItems, setFiltredItems] = useState([])
  const [apiError, setApiError] = useState('')
  const [
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter
  ] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userIsTyping, setUserIsTyping] = useState(false)
  const [typingTimeoutId, setTypingTimeoutId] = useState(0)

  return {
    filtredItems,
    setFiltredItems,
    apiError,
    setApiError,
    everyPeopleThatMatchesFilter,
    setEveryPeopleThatMatchesFilter,
    isLoading,
    setIsLoading,
    userIsTyping,
    setUserIsTyping,
    typingTimeoutId,
    setTypingTimeoutId
  }
}
