import fetch from 'node-fetch'
import sharp from 'sharp'

/**
 * Get image from a URL as a Base64 String
 * @param url 
 * @returns base64ImageString
 */
export default async (url: string) => {
    const imageResponse = await fetch(url)
    const imageBlob = await imageResponse.buffer()
  
    const imageBuffer = await sharp(imageBlob).resize(1000).toBuffer()
    const imageBase64 = imageBuffer.toString('base64')

    return imageBase64
}
