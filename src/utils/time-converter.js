/**
 * Converts a time stamp to a corresponding 'xyz time ago' string
 * @param {string} timestamp - String representing the time stamp returned by API 2019-08-24T14:15:22Z
 * @returns {string}
 */

function getTimeAgo (timestamp) {
  const diff = new Date().getTime() - new Date(timestamp).getTime()

  const s = Math.floor((diff / 1000) % 60)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))

  const seconds = s + ' s ago'
  const minutes = m > 0 ? m + ' m ' : ''
  const hours = h > 0 ? h + ' h ' : ''
  const days = d > 0 ? ' more than a day ago' : ''

  const formattedTime = !days ? hours + minutes + seconds : days

  return formattedTime
}

export default getTimeAgo
