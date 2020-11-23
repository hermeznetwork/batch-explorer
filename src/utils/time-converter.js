/**
 * Converts a time stamp to a corresponding 'xyz time ago' string
 * @param {String} timestamp - String representing the time stamp returned by API 2019-08-24T14:15:22Z
 * @returns {String}
 */
function getTimeAgo (timestamp) {
  const diff = new Date(new Date() - new Date(new Date(timestamp).getTime() * 1000))
  const seconds = ('0' + diff.getSeconds()).substr(-2) + 's ago'
  const minutes = ('0' + diff.getMinutes()).substr(-2) + 'm '
  const hours = diff.getHours() + 'h '
  const days = diff.getDate() > 1 ? ' more than a day ago' : ''
  const formattedTime = !days ? hours + minutes + seconds : days

  return formattedTime
}

export default getTimeAgo
