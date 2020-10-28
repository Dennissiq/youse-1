export default interface ApiFetcher {
  setFiltredItems: React.Dispatch<React.SetStateAction<string>>
  setApiError: React.Dispatch<React.SetStateAction<number>>
  setEveryPeopleThatMatchesFilter: React.Dispatch<React.SetStateAction<string>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
