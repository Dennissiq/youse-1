export default interface OnInputChange {
  forceListUpdate: Function
  setUserIsTyping: React.Dispatch<React.SetStateAction<boolean>>
  setTypingTimeoutId: React.Dispatch<React.SetStateAction<number>>
  typingTimeoutId: number
}
