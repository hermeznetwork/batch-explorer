import React from 'react'

function CoordinatorDetails ({ coordinator }) {
  return (
    <section>
      <div>
        Forger address: {coordinator[0].Forger}
      </div>
      <div>
        Withdrawal address: {coordinator[0].Beneficiary}
      </div>
      <div>
        URL: {coordinator[0].URL}
      </div>
    </section>
  )
}

export default CoordinatorDetails
