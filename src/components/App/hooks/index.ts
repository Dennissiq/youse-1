import compose from '../../../helpers/composeEnhancer'
import useApiFetcher from './useApiFetcher'
import useEffects from './useEffects'
import useStates from './useStates'
import useHandlers from './useHandlers'
import mapProps from './mapProps'

export default compose(
  useStates,
  useApiFetcher,
  useEffects,
  useHandlers,
  mapProps
)
