import Twitter = require('twitter')

/**
 * Update user's twitter banner with the provided Base64 Image
 * @param twitterConfig
 * @param image Base64 Encoded Image
 */
export default async (twitterConfig: Twitter.AccessTokenOptions, image: string) => {
  const client = new Twitter(twitterConfig)

  const twitterResponse = await client.post('account/update_profile_banner', {
    banner: image,
  })

  return twitterResponse
}
