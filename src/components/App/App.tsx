import React from 'react'
import { AnimatedList } from 'react-animated-list'
import ReactPaginate from 'react-paginate'
import enhancer from './hooks'
import ApiError from '../ApiError'
import AppProps from '../../interfaces/AppProps'
import Person from '../../interfaces/Person'
import GlobalStyle from '../../styles/global'
import PersonLi from '../Person'
import { getQueryString } from '../../helpers/url'
import { Title, Loading, InputHolder } from './styles'
import { itemsPerPage } from '../../constants'
import Loader from '../Loader'

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
  isLoading,
}: AppProps) => (
  <main>
    <GlobalStyle />
    <Title>Youse front-end test</Title>
    <InputHolder>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Search name or email"
        id="search-box"
      />
      <Loader isLoading={isLoading} />
    </InputHolder>
    {!!apiError ? (
      <ApiError text={apiError} />
    ) : !isLoading ? (
      <>
        <AnimatedList animationProps={{ in: true }}>
          {filtredItems.map((item: Person, key: number) => (
            <PersonLi key={item.id} modifier={key} item={item} />
          ))}
        </AnimatedList>
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
    ) : (
      <Loading>Loading...</Loading>
    )}
  </main>
)

export default enhancer(App)
