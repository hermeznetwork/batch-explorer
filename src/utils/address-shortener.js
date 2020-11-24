/**
 * Get the partially hidden address representation of an address
 * @param {string} address
 * @returns {string}
 */
function getPartiallyHiddenAddress (address) {
  const firstAddressSlice = address.slice(0, 6)
  const secondAddressSlice = address.slice(
    address.length - 4,
    address.length
  )

  return `${firstAddressSlice}...${secondAddressSlice}`
}

export default getPartiallyHiddenAddress
