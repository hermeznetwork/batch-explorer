import React from 'react'

function CoordinatorDetails ({ coordinator }) {
  return (
    <section>
      <div>
        <a
          href={coordinator.URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          {coordinator.URL}
        </a>
      </div>
      <div>
        Forger address: {coordinator.forgerAddr}
      </div>
      <div>
        Withdrawal address: {coordinator.withdrawAddr}
      </div>
      <div>
      Ethereum block: {coordinator.ethereumBlock}
      </div>
    </section>
  )
}

export default CoordinatorDetails
