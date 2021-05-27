import { join } from 'path'

import dotenv from 'dotenv'

import getNasaImageOfTheDayUrl from './integrations/getNasaImageOfTheDayUrl'
import updateTwitterBanner from './tasks/updateTwitterBanner'
import Twitter from 'twitter'
import updateReadme from './tasks/updateReadme'
import updateTwitterName from './tasks/updateTwitterName'

const templatePath = join(__dirname, '../src/templates/README.template.md')
const outPath = join(__dirname, '..', 'README.md')

dotenv.config()

const nasaApiKey: string = process.env.NASA_API_KEY || ''

const twitterConfig: Twitter.AccessTokenOptions = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
}

const main = async () => {
  const tasks = [
    updateTwitterBanner(twitterConfig, () =>
      getNasaImageOfTheDayUrl(nasaApiKey)
    ),
    updateTwitterName(twitterConfig),
    updateReadme(templatePath, outPath),
  ]

  try {
    await Promise.all(tasks)
    console.log('Tasks run successfully')
  } catch (err) {
    console.error('Error running tasks:')
    console.error(err)
    process.exitCode = 1
  }
}

main()
