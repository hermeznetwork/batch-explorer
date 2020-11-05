/**
 * Copy given string to the clipboard
 *
 * @param {String} text - String to be copied
 *
 */
function copyToClipboard (text) {
  const textArea = document.createElement('textarea')

  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.opacity = 0
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

export {
  copyToClipboard
}
