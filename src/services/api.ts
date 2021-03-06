import faker from 'faker'
import ListResponse from '../interfaces/ListResponse'
import Person from '../interfaces/Person'

faker.seed(0)

const defaultParams = {
  filter: false,
  skip: 0,
  limit: false
}

export default {
  fetch: (userParams: { skip: number; filter: string; limit: number }) =>
    new Promise<ListResponse>((resolve, reject) => {
      if (Math.random() > 0.9) {
        return reject(503)
      }

      const { filter, skip, limit } = {
        ...defaultParams,
        ...userParams
      }

      const allItems = Array.from(Array(200)).map((_, i) => ({
        id: i,
        title: faker.name.findName(),
        description: faker.internet.email()
      }))

      const everyPeopleThatMatchesFilter: Array<Person> = allItems.filter(
        item =>
          !filter
            ? true
            : item.title.includes(filter) || item.description.includes(filter)
      )

      const paginatedItems = everyPeopleThatMatchesFilter.slice(
        skip,
        skip + limit
      )

      if (!paginatedItems.length) {
        return reject(404)
      }

      setTimeout(
        () =>
          resolve({
            filtredItems: paginatedItems,
            everyPeopleThatMatchesFilter
          }),
        500
      )
    })
}
