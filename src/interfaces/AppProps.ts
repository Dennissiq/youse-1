import Person from './Person'

export default interface AppProps {
  filtredItems: Array<Person>
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
  apiError: number
  onPaginationItemClick(selectedItem: { selected: number }): void
  isLoading: boolean
  currentPage: number
  pageCount: number
  forceListUpdate: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void | undefined
  currentFilter: string
  userIsTyping: boolean
}
