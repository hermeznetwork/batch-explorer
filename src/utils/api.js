/**
 * Checks if a request to a paginated API endpoint has more items pending to retrieve
 * @param {number} pendingItems - Pending items to retrieve from a paginated API endpoint
 * @returns {Object} - Pagination information for the next request
 */

function getPaginationData (pendingItems, items) {
  return pendingItems === 0
    ? { hasMoreItems: false }
    : { hasMoreItems: true, fromItem: items[items.length - 1].itemId + 1 }
}

export {
  getPaginationData
}
