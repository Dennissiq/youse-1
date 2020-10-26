import React from 'react'
import enhancer from './hooks'
import ApiError from '../ApiError'
import ReactPaginate from 'react-paginate'
import { AppProps } from '../../interfaces'
import Person from '../../interfaces/Person'
import { itemsPerPage } from '../../constants'

const App = ({
  filtredItems,
  onInputChange,
  apiError,
  updatePagination,
  everyPeopleThatMatchesFilter,
}: AppProps) => (
  <main>
    <input
      onChange={onInputChange}
      type="text"
      placeholder="search name or email"
      id="search-box"
    />
    {!!apiError ? (
      <ApiError text={apiError} />
    ) : (
      <ul>
        {filtredItems.map((item: Person) => (
          <li key={item.id}>
            <article>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    )}
    <ReactPaginate
      pageCount={everyPeopleThatMatchesFilter.length / itemsPerPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      onPageChange={updatePagination}
    />
  </main>
)

export default enhancer(App)
