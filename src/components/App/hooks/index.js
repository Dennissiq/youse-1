import compose from '../../../helpers/composeEnhancer'
import useApiFetcher from './useApiFetcher'
import useEffects from './useEffects'
import useStates from './useStates'

export default compose(useStates, useApiFetcher, useEffects)
