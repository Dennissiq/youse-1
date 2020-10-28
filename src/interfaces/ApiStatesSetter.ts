import Person from './Person'

export default interface ApiFetcher {
  setFiltredItems: React.Dispatch<React.SetStateAction<Array<Person>>>
  setApiError: React.Dispatch<React.SetStateAction<number>>
  setEveryPeopleThatMatchesFilter: React.Dispatch<
    React.SetStateAction<Array<Person>>
  >
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
