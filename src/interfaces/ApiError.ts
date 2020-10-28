export default interface ApiError {
  code: number
  tryAgain: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void | undefined
  page: number
  filter: string
  isLoading: boolean
  userIsTyping: boolean
}
