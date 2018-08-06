import { GraphQLClient } from 'graphql-request'

const RepositoryOwner = 'chenqipeng'
const RepositoryName = 'pages'
const RepositoryBranch = 'master:'
const RepositoryPath = 'posts/archives/'

const QueryUrl = 'https://api.github.com/graphql'
const Authorization = 'bearer 1fcd6d38878f79c0f92203d5369d9efcece042be'

const QueryClient = new GraphQLClient(QueryUrl, {
  headers: {
    Authorization
  }
})

export {
  RepositoryOwner,
  RepositoryName,
  RepositoryBranch,
  QueryUrl,
  Authorization,
  QueryClient,
  RepositoryPath
}
