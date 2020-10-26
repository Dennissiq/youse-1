import Person from './Person'

export interface AppProps {
  filtredItems: Array<Person>
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
  apiError: string
}
