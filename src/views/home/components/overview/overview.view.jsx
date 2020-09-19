import React from 'react'

function Overview ({ overview }) {
  return (
    <div>
      <div>
        LAST BatcH: {overview.lastBatch}
      </div>
      <div>
        AVG TRANSACTIONS PER BATCH: {overview.transactionsPerBatch}
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
        AVG TRANSACTION FEE: {overview.avgTransactionFee}
      </div>
    </div>
  )
}

export default Overview
