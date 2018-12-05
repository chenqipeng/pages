const RepositoryOwner = 'chenqipeng'
const RepositoryName = 'pages'
const RepositoryBranch = 'master:'
const RepositoryPath = 'posts/archives/'
const AttrUrl = 'posts/attr.json'

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
   * @param {String} postName 文章名
   */
  queryPost (postName) {
    return `
      query {
        repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
          object(expression: "${RepositoryBranch + RepositoryPath + postName}.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    `
  },

  /**
   * 获取博客属性
   */
  queryAttr () {
    return `
      query {
        repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
          object(expression: "${RepositoryBranch + AttrUrl}") {
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
  RepositoryOwner,
  RepositoryName,
  RepositoryBranch,
  RepositoryPath,
  AttrUrl,
  PresetQuery
}
