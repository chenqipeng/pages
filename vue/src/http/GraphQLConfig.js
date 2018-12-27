const RepositoryOwner = 'chenqipeng'
const RepositoryName = 'pages'
const RepositoryBranch = 'master:'
const RepositoryPath = 'posts/archives/'
const DigestUrl = 'posts/digest.json'

const PresetQuery = {
  /**
   * 获取所有文章
   */
  queryArchives () {
    return `
      query {
        repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
          object(expression: "${RepositoryBranch + RepositoryPath}") {
            ... on Tree {
              entries {
                name
              }
            }
          }
        }
      }
    `
  },

  /**
   * 获取文章
   * @param {String} title 文章名
   */
  queryPost (title) {
    return `
      query {
        repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
          object(expression: "${RepositoryBranch + RepositoryPath + title}.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    `
  },

  /**
   * 获取博客摘要
   */
  queryDigest () {
    return `
      query {
        repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
          object(expression: "${RepositoryBranch + DigestUrl}") {
            ... on Blob {
              text
            }
          }
        }
      }
    `
  }
}

export {
  PresetQuery
}
