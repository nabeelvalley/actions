require('dotenv').config()
const fetch = require('node-fetch')
const sharp = require('sharp')
const Twitter = require('twitter')

const harvardArtApiKey = process.env.HARVARD_ART_API_KEY
const twitterConfig = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

const main = async () => {
  const artApiResponse = await fetch(
    `https://api.harvardartmuseums.org/image?sort=random&apikey=${harvardArtApiKey}`
  )

  const artApiData = await artApiResponse.json()
  const imageUrl = artApiData.records[0].baseimageurl

  const imageResponse = await fetch(imageUrl)
  const imageBlob = await imageResponse.buffer()

  const imageBuffer = await sharp(imageBlob).resize(1000).toBuffer()
  const imageBase64 = imageBuffer.toString('base64')

  const client = new Twitter(twitterConfig)
  
  const twitterResponse = await client.post('account/update_profile_banner', {
    banner: imageBase64
  })
}

main()
