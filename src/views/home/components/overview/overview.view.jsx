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
        Avg Batch Time: {overview.batchFrequency}
      </div>
      <div>
        Transactions Per Second: {overview.transactionsPerSecond}
      </div>
      <div>
        <div>
          Total Wallets: {overview.totalBJJs}
        </div>
        <div>
          {overview.totalAccounts} accounts
        </div>
      </div>
      <div>
        Avg transaction fee: {overview.avgTransactionFee}
      </div>
    </div>
  )
}

export default Overview
