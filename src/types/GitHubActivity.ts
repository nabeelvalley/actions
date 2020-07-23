/**
 * Result of Recent Activity Query from GitHub API
 */
export default interface GitHubActivity {
  user: {
    repositoriesContributedTo: {
      nodes: {
        name: string
        url: string
      }[]
    }
    starredRepositories: {
      nodes: {
        name: string
        url: string
      }[]
    }
  }
}
