import fetch from 'node-fetch'

/**
 * Get an Image URL from the Harvard Art Museums API
 * @param apiKey 
 * @returns imageUrl
 */
module.exports = async (apiKey: string) => {
  const artApiResponse = await fetch(
    `https://api.harvardartmuseums.org/image?sort=random&apikey=${apiKey}`
  )

  const data = await artApiResponse.json() as {records: {baseimageurl: string}[]}
  const imageUrl = data.records[0].baseimageurl

  return imageUrl
}
