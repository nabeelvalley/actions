import fetch from'node-fetch'
import { getYesterday, yyyymmdd } from '../utils/getDateFormat'

/**
 * Get an Image URL from the NASA Mars Rover API
 */
export default async (apiKey: string): Promise<string> => {
  const date = yyyymmdd(getYesterday())

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`
  )

  const data = await (response.json() as { url?: string })

  if (data && data.url) {
    return data.url
  } else {
    throw 'No photos returned from API'
  }
}