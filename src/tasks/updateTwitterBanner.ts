import Twitter = require('twitter')

import getImageFromUrl from '../utils/getImageFromUrl'
import updateTwitterBanner from '../integrations/updateTwitterBanner'

/**
 * Get an image and set it as the twitter banner
 * @param twitterConfig twitter client configuration
 * @param getImageFn function to retrieve the image url
 */
export default async (
  twitterConfig: Twitter.AccessTokenOptions,
  getImageFn: () => Promise<string>
): Promise<void> => {
  const imageUrl = await getImageFn()
  const imageBase64 = await getImageFromUrl(imageUrl)
  await updateTwitterBanner(twitterConfig, imageBase64)
}
