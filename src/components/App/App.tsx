import React from 'react'
import { AnimatedList } from 'react-animated-list'
import ReactPaginate from 'react-paginate'
import enhancer from './hooks'
import ApiError from '../ApiError'
import AppProps from '../../interfaces/AppProps'
import Person from '../../interfaces/Person'
import GlobalStyle from '../../styles/global'
import PersonDiv from '../Person'
import Loader from '../Loader'
import { Title, Loading, InputHolder } from './styles'

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
        <PersonDiv
          key={'1'}
          modifier={1}
          header
          item={{ id: 0, title: 'Name', description: 'Email' }}
        />
        <AnimatedList animationProps={{ in: true }}>
          {filtredItems.map((item: Person, key: number) => (
            <PersonDiv
              header={false}
              key={item.id}
              modifier={key}
              item={item}
            />
          ))}
        </AnimatedList>
        {pageCount > 1 && (
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
    ) : (
      <Loading>Loading...</Loading>
    )}
  </main>
)

export default enhancer(App)
