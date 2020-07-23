import xml2js from 'xml2js'
import fetch from 'node-fetch'
import BlogRSS from '../types/BlogRSS'

/**
 * Fetch RSS Feed Posts from the provided URL
 * @param rssUrl
 */
module.exports = async (rssUrl: string) => {
  const response = await fetch(rssUrl)
  const text = await response.text()
  const feed: BlogRSS = await xml2js.parseStringPromise(text)

  const channel = feed.rss.channel[0]

  const lastBuildDate = new Date(channel.lastBuildDate[0]).toDateString()

  const posts = channel.item
    .map((i) => ({
      title: i.title[0],
      link: i.link[0],
      pubDate: new Date(i.pubDate[0]).toDateString(),
    }))
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )

  return {
    lastBuildDate,
    posts,
  }
}
