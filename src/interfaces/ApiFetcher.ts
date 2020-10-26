export default interface ApiFetcher {
  setFiltredItems: React.Dispatch<React.SetStateAction<string>>
  setApiError: React.Dispatch<React.SetStateAction<string>>
  setEveryPeopleThatMatchesFilter: React.Dispatch<React.SetStateAction<string>>
}
