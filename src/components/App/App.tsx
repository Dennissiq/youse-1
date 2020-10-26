import React from 'react'
import enhancer from './hooks'
import ApiError from '../ApiError'
import ReactPaginate from 'react-paginate'
import { AppProps } from '../../interfaces'
import Person from '../../interfaces/Person'
import GlobalStyle from '../../styles/global'
import PersonLi from '../Person'
import { getQueryString } from '../../helpers/url'
import { Title } from './styles'
import { itemsPerPage } from '../../constants'

const getPage = () => {
  return ~~getQueryString('page') || 0
}

const getLimit = () => {
  return ~~getQueryString('limit') || itemsPerPage
}

const App = ({
  filtredItems,
  onInputChange,
  apiError,
  onPaginationItemClick,
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
          pageCount={everyPeopleThatMatchesFilter.length / getLimit()}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={onPaginationItemClick}
          pageClassName="paginate__item"
          containerClassName="paginate"
          breakClassName="paginate__dots"
          previousLabel="<"
          nextLabel=">"
          forcePage={getPage()}
        />
      </>
    )}
  </main>
)

export default enhancer(App)
