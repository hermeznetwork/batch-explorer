import PropTypes from "prop-types";
import clsx from "clsx";

import Transaction from "../transaction/transaction.view";
import useTransactionsListStyles from "./transactions-list.styles";
import { getTransactionAmount } from "../../../utils/transactions";
import { getFixedTokenAmount } from "../../../utils/currencies";

function TransactionsList({ transactions, isToken }) {
  const classes = useTransactionsListStyles();

  return (
    <section>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.link}`}>Tx ID</div>
        {isToken ? <></> : <div className={classes.col}>Token</div>}
        <div className={classes.col}>Amount</div>
      </div>
      {transactions.map((transaction, index) => {
        const amount = getTransactionAmount(transaction);
        const fixedTokenAmount = getFixedTokenAmount(amount, transaction.token.decimals);

        return (
          <div key={transaction.id} className={clsx({ [classes.transaction]: index > 0 })}>
            <Transaction
              transactionId={transaction.id}
              amount={fixedTokenAmount}
              tokenSymbol={transaction.token.symbol}
              isToken={isToken}
            />
          </div>
        );
      })}
    </section>
  );
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      fee: PropTypes.number,
    })
  ),
};

export default TransactionsList;
