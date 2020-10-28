import Person from './Person'

export default interface ListResponse {
  filtredItems: Array<Person>
  everyPeopleThatMatchesFilter: Array<Person>
}
