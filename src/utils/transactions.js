import { TxType } from '@hermeznetwork/hermezjs/src/enums'

function getTransactionAmount (transaction) {
  if (!transaction) {
    return undefined
  }

  if (!transaction.L1Info) {
    return transaction.amount
  } else {
    if (transaction.type === TxType.Deposit ||
      transaction.type === TxType.CreateAccountDeposit ||
      transaction.type === TxType.CreateAccountDepositTransfer ||
      transaction.type === TxType.DepositTransfer) {
      return transaction.L1Info.depositAmount
    } else {
      return transaction.amount
    }
  }
}

export {
  getTransactionAmount
}
