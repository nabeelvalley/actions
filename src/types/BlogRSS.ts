/**
 * Shape of data from Blog RSS Feed
 */
export default interface BlogRSS {
  rss: {
    channel: {
      lastBuildDate: string
      item: [
        {
          title: string[]
          link: string[]
          pubDate: string[]
        }
      ]
    }[]
  }
}
