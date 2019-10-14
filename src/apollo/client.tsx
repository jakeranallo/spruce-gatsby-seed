import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

// Apollo error handler
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    new HttpLink({
      uri: 'http://localhost:4000',
      credentials: 'same-origin',
      fetch
    })
  ]),
  cache: new InMemoryCache()
})
