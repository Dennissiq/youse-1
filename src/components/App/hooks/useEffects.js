import { useEffect } from 'react'

export default ({ updateResult }) => {
  useEffect(() => {
    updateResult()
  }, [])
  return {}
}
