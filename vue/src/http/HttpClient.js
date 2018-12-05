import { GraphQLClient } from 'graphql-request'

const QueryUrl = 'https://api.github.com/graphql'
const Authorization = 'bearer 1fcd6d38878f79c0f92203d5369d9efcece042be'

let HttpClient = new GraphQLClient(QueryUrl, {
  headers: {
    Authorization
  }
})

export {
  HttpClient
}
