import React from 'react'
import enhancer from './hooks'

const App = ({ filtredItems }) => (
  <main>
    <input type="text" placeholder="search name or email" />
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
  </main>
)

export default enhancer(App)
