import React from 'react'

function CoordinatorDetails ({ coordinator }) {
  return (
    <section>
      <div>
        Forger address: {coordinator.forgerAddr}
      </div>
      <div>
        Withdrawal address: {coordinator.withdrawAddr}
      </div>
      <div>
        <a
          href={coordinator.URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          {coordinator.URL}
        </a>
      </div>
    </section>
  )
}

export default CoordinatorDetails
