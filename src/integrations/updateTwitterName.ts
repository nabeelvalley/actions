import Twitter = require('twitter')

/**
 * Update user's twitter displayName with the provided Base64 Image
 * @param twitterConfig
 * @param displayName new display name to set
 */
export default async (
  twitterConfig: Twitter.AccessTokenOptions,
  displayName: string
) => {
  const client = new Twitter(twitterConfig)

  const twitterResponse = await client.post('account/update_profile', {
    name: displayName,
  })

  return twitterResponse
}
