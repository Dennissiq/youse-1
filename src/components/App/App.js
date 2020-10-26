import React from 'react'
import enhancer from './hooks'
import ApiError from '../ApiError'

const App = ({ filtredItems, onInputChange, apiError }) => (
  <main>
    <input
      onChange={onInputChange}
      type="text"
      placeholder="search name or email"
      id="search-box"
    />
    {apiError ? (
      <ApiError text={apiError} />
    ) : (
      <ul>
        {filtredItems.map((item) => (
          <li key={item.id}>
            <article>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    )}
  </main>
)

export default enhancer(App)
