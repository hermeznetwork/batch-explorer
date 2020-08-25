import React from 'react'

function CoordinatorDetails ({ coordinator }) {
  return (
    <section>
      <div>
        <a
          href={coordinator[0].URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          {coordinator[0].URL}
        </a>
      </div>
      <div>
        Forger address: {coordinator[0].Forger}
      </div>
      <div>
        Withdrawal address: {coordinator[0].Beneficiary}
      </div>
    </section>
  )
}

export default CoordinatorDetails
