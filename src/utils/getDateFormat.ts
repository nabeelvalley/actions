/**
 * Convert date to YYYY-MM-DD format
 */
export const yyyymmdd = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month}-${day}`
}

/**
 * Get Yesterday's date
 */
export const getYesterday = (): Date => {
  var date = new Date()
  date.setDate(date.getDate() - 1)

  return date
}
