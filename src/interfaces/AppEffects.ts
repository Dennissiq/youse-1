import ApiFetcher from './ApiFetcher'

export default interface AppEffects extends ApiFetcher {
  setFiltredItems: React.Dispatch<React.SetStateAction<string>>
  setApiError: React.Dispatch<React.SetStateAction<string>>
  setEveryPeopleThatMatchesFilter: React.Dispatch<React.SetStateAction<string>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
