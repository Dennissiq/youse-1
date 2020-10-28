export default interface ApiError {
  code: number
  tryAgain: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  page: number
  filter: string
  isLoading: boolean
  userIsTyping: boolean
  resetSearch: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
