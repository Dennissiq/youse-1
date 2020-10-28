import { updateQueryString } from '../../../helpers/url'
import OnInputChange from '../../../interfaces/OnInputChange'

const typingTimeout = (
  forceListUpdate: Function,
  setUserIsTyping: React.Dispatch<React.SetStateAction<boolean>>
) =>
  setTimeout(() => {
    setUserIsTyping(false)
    forceListUpdate()
  }, 500)

const waitForTypingThenUpdateList = ({
  setUserIsTyping,
  setTypingTimeoutId,
  forceListUpdate,
  typingTimeoutId
}: OnInputChange) => {
  setUserIsTyping(true)
  setTypingTimeoutId(typingTimeout(forceListUpdate, setUserIsTyping))
  clearTimeout(typingTimeoutId)
}

export default ({
  forceListUpdate,
  setUserIsTyping,
  setTypingTimeoutId,
  typingTimeoutId
}: OnInputChange) => ({
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    updateQueryString('page', '0')
    updateQueryString('filter', value)

    waitForTypingThenUpdateList({
      setUserIsTyping,
      setTypingTimeoutId,
      forceListUpdate,
      typingTimeoutId
    })
  },
  onPaginationItemClick: (selectedItem: { selected: number }) => {
    const { selected } = selectedItem
    updateQueryString('page', `${selected}`)
    forceListUpdate()
  },
  resetSearch: () => {
    const searchBox = document.getElementById('search-box') as HTMLInputElement
    searchBox.value = ''

    updateQueryString('page', '0')
    updateQueryString('filter', '')
    forceListUpdate()
  }
})
