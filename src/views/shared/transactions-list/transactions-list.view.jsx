import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { getTokenAmountString } from '../../../utils/bigint-decimals-converter'

import Transaction from '../transaction/transaction.view'
import useTransactionsListStyles from './transactions-list.styles'

function TransactionsList ({ transactions, isToken }) {
  const classes = useTransactionsListStyles()

  return (
    <section>
      {transactions.map((transaction, index) =>
        <div
          key={transaction.id}
          className={clsx({ [classes.transaction]: index > 0 })}
        >
          <div className={classes.row}>
            <div className={`${classes.col} ${classes.link}`}>Transaction ID</div>
            {
              isToken
                ? <></>
                : <div className={classes.col}>Token</div>
            }
            <div className={classes.col}>Amount</div>
          </div>
          <Transaction
            transactionId={transaction.id}
            amount={getTokenAmountString(transaction.amount, transaction.token.decimals)}
            tokenSymbol={transaction.token.symbol}
            isToken={isToken}
          />
        </div>
      )}
    </section>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      TxID: PropTypes.string.isRequired,
      Amount: PropTypes.number.isRequired,
      Fee: PropTypes.number
    })
  )
}

export default TransactionsList
