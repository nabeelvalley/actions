import { writeFile, readFile } from 'fs'

const read = async (templatePath: string): Promise<string> => {
  return await new Promise((resolve, reject) =>
    readFile(templatePath, 'utf-8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  )
}

const write = async (outputPath: string, outputContent: string) => {
  await new Promise((resolve, reject) =>
    writeFile(outputPath, outputContent, (err) => {
      if (err) reject(err)
      else resolve()
    })
  )
}

export default async (templatePath: string, outputPath: string) => {
  const template = await read(templatePath)

  const outputContent = template.replace(
    '%%LAST_RUN%%',
    new Date().toDateString()
  )

  await write(outputPath, outputContent)
}
