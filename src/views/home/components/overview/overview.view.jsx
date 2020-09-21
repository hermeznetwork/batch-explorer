import React from 'react'

function Overview ({ overview }) {
  return (
    <div>
      <div>
        Last batch: {overview.lastBatch}
      </div>
      <div>
        Avg transactions per batch: {overview.transactionsPerBatch}
      </div>
      <div>
        Avg Batch Time - batchFrequency: {overview.batchFrequency}
      </div>
      <div>
        Transactions Per Second: {overview.transactionsPerSecond}
      </div>
      <div>
        Total Wallets - totalAccounts: {overview.totalAccounts}
      </div>
      <div>
        Total Wallets - totalBJJs: {overview.totalBJJs}
      </div>
      <div>
        Avg transaction fee: {overview.avgTransactionFee}
      </div>
    </div>
  )
}

export default Overview
