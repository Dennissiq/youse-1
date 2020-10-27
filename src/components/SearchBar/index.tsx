import React from 'react'
import { InputHolder } from './styles'
import Loader from '../Loader'

export default ({
  onInputChange,
  isLoading,
}: {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
}) => (
  <InputHolder>
    <input
      onChange={onInputChange}
      type="text"
      placeholder="Search name or email"
      id="search-box"
    />
    <Loader isLoading={isLoading} />
  </InputHolder>
)
