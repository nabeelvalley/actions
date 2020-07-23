require('dotenv').config()
const path = require('path')

const getNasaImageOfTheDayUrl = require('./integrations/getNasaImageOfTheDayUrl')
const updateTwitterBanner = require('./tasks/updateTwitterBanner')

const nasaApiKey = process.env.NASA_API_KEY

const twitterConfig = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}

const main = async () => {
  const tasks = [
    updateTwitterBanner(twitterConfig, () => getNasaImageOfTheDayUrl(nasaApiKey)),
  ]

  try {
    await Promise.all(tasks)
    console.log('Tasks run successfully')
  } catch (err) {
    console.error('Error running tasks:')
    console.error(err)
  }
}

main()
