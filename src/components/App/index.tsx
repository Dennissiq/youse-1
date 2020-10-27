import React from 'react'
import ReactPaginate from 'react-paginate'
import enhancer from './hooks'
import ApiError from '../ApiError'
import AppProps from '../../interfaces/AppProps'
import GlobalStyle from '../../styles/global'
import SearchBar from '../SearchBar'
import { Title } from './styles'
import List from '../List'

const App = ({
  filtredItems,
  onInputChange,
  apiError,
  onPaginationItemClick,
  isLoading,
  currentPage,
  pageCount,
}: AppProps) => (
  <main>
    <GlobalStyle />
    <Title>Youse front-end test</Title>
    <SearchBar onInputChange={onInputChange} isLoading={isLoading} />
    {!!apiError ? (
      <ApiError text={apiError} />
    ) : (
      <>
        <List isLoading={isLoading} filtredItems={filtredItems} />
        {pageCount > 1 && !isLoading && (
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={onPaginationItemClick}
            pageClassName="paginate__item"
            containerClassName="paginate"
            breakClassName="paginate__dots"
            previousLabel="<"
            nextLabel=">"
            forcePage={currentPage}
          />
        )}
      </>
    )}
  </main>
)

export default enhancer(App)
