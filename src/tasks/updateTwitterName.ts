import Twitter = require('twitter')

import getImageFromUrl from '../utils/getImageFromUrl'
import updateTwitterName from '../integrations/updateTwitterName'

const getDayText = () => {
  const weekdays = new Array(
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  )

  const day = new Date().getDay()

  return weekdays[day]
}

/**
 * Get an image and set it as the twitter banner
 * @param twitterConfig twitter client configuration
 * @param getImageFn function to retrieve the image url
 */
export default async (
  twitterConfig: Twitter.AccessTokenOptions
): Promise<void> => {
  const name = `ugh ${getDayText()}s`
  await updateTwitterName(twitterConfig, name)
}
