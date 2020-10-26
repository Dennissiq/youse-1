import React from 'react'
import enhancer from './hooks'
import ApiError from '../ApiError'
import ReactPaginate from 'react-paginate'
import { AppProps } from '../../interfaces'
import Person from '../../interfaces/Person'
import { itemsPerPage } from '../../constants'
import GlobalStyle from '../../styles/global'
import PersonLi from '../Person'
import { getQueryString } from '../../helpers/url'
import { Title } from './styles'

const App = ({
  filtredItems,
  onInputChange,
  apiError,
  updatePagination,
  everyPeopleThatMatchesFilter,
}: AppProps) => (
  <main>
    <GlobalStyle />
    <Title>Youse front-end test</Title>
    <input
      onChange={onInputChange}
      type="text"
      placeholder="Search name or email"
      id="search-box"
    />
    {!!apiError ? (
      <ApiError text={apiError} />
    ) : (
      <>
        <ul>
          {filtredItems.map((item: Person) => (
            <PersonLi key={item.id} item={item} />
          ))}
        </ul>
        <ReactPaginate
          pageCount={everyPeopleThatMatchesFilter.length / itemsPerPage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={updatePagination}
          pageClassName="paginate__item"
          containerClassName="paginate"
          breakClassName="paginate__dots"
          previousLabel="<"
          nextLabel=">"
          forcePage={~~getQueryString('page')}
        />
      </>
    )}
  </main>
)

export default enhancer(App)
