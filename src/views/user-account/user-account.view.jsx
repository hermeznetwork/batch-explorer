import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import clsx from "clsx";

import useUserAccountStyles from "./user-account.styles";
import Spinner from "../shared/spinner/spinner.view";
import Container from "../shared/container/container.view";
import AccountDetails from "./components/account-details/account-details.view";
import { fetchAccounts, fetchTransactions } from "../../store/user-account/user-account.thunks";
import TransactionsList from "../shared/transactions-list/transactions-list.view";
import CopyToClipboardButton from "../shared/copy-to-clipboard-button/copy-to-clipboard-button.view";
import InfiniteScroll from "../shared/infinite-scroll/infinite-scroll.view";
import { resetState } from "../../store/user-account/user-account.actions";
import Row from "../shared/row/row";
import Col from "../shared/col/col";
import Title from "../shared/title/title";
import { getFixedTokenAmount } from "../../utils/currencies";

function UserAccount({
  onLoadAccounts,
  accountsTask,
  onLoadTransactions,
  transactionsTask,
  onCleanup,
}) {
  const classes = useUserAccountStyles();
  const { address } = useParams();
  const [isFirstTabVisible, setFirstTabVisible] = React.useState();
  const [isSecondTabVisible, setSecondTabVisible] = React.useState();

  /**
   * Handles first tab click
   *
   * @returns {void}
   */
  function handleFirstTabClick() {
    setFirstTabVisible(true);
    setSecondTabVisible(false);
  }

  /**
   * Handles second tab click
   *
   * @returns {void}
   */
  function handleSecondTabClick() {
    setFirstTabVisible(false);
    setSecondTabVisible(true);
  }

  React.useEffect(() => {
    onCleanup();
    onLoadAccounts(address);
    onLoadTransactions(address);
  }, [address, onCleanup, onLoadAccounts, onLoadTransactions]);

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (accountsTask.status) {
              case "loading": {
                return <Spinner />;
              }
              case "failed": {
                return <p>{accountsTask.error}</p>;
              }
              case "reloading":
              case "successful": {
                return (
                  <>
                    <section>
                      <Title>Account address</Title>
                      <Row />
                      <Row>
                        <Col>Ethereum address</Col>
                        <Col>
                          {accountsTask.data.accounts[0].hezEthereumAddress ? (
                            <Row wrapped>
                              <CopyToClipboardButton
                                content={accountsTask.data.accounts[0].hezEthereumAddress}
                              />
                              <Col wrapped>{accountsTask.data.accounts[0].hezEthereumAddress}</Col>
                            </Row>
                          ) : (
                            <Row wrapped>
                              <Col wrapped>was not created</Col>
                            </Row>
                          )}
                        </Col>
                      </Row>

                      {/* <Title>Related addresses</Title>
                      <Row />
                      <Row>
                        <Col>
                          BabyJubJub address
                        </Col>
                        <Col>
                          <Row wrapped>
                            <Col wrapped>
                              <CopyToClipboardButton content={accountsTask.data.accounts[0].bjj} />
                              {accountsTask.data.accounts[0].bjj}
                            </Col>
                          </Row>
                        </Col>
                      </Row> */}
                      <Row>
                        <Col>Token accounts</Col>
                        <Col>{accountsTask.data.pagination.totalItems}</Col>
                      </Row>
                    </section>
                    <section>
                      <div className={classes.toggleWrapper}>
                        <button
                          className={clsx({
                            [classes.toggle]: true,
                            [classes.active]: true,
                            [classes.notActive]: isSecondTabVisible,
                          })}
                          onClick={() => handleFirstTabClick()}
                        >
                          Token accounts
                        </button>
                        <button
                          className={clsx({
                            [classes.toggle]: true,
                            [classes.active]: isSecondTabVisible,
                            [classes.notActive]: isFirstTabVisible,
                          })}
                          onClick={() => handleSecondTabClick()}
                        >
                          Transactions
                        </button>
                      </div>
                      <div
                        className={clsx({
                          [classes.hidden]: isSecondTabVisible,
                          [classes.firstTabVisible]: isFirstTabVisible,
                        })}
                      >
                        <Row flex>
                          <Col flex>Token</Col>
                          <Col flex>
                            <span className={classes.alignedMiddleColumn}>Address</span>
                          </Col>
                          <Col flex>Balance</Col>
                        </Row>
                        <InfiniteScroll
                          asyncTaskStatus={accountsTask.status}
                          paginationData={accountsTask.data.pagination}
                          onLoadNextPage={(fromItem) => {
                            if (accountsTask.status === "successful") {
                              onLoadAccounts(
                                accountsTask.data.accounts[0].hezEthereumAddress,
                                fromItem
                              );
                            }
                          }}
                        >
                          {accountsTask.data.accounts.map((account, index) => (
                            <div
                              key={account.accountIndex}
                              className={clsx({ [classes.account]: index > 0 })}
                            >
                              <AccountDetails
                                tokenSymbol={account.token.symbol}
                                balance={getFixedTokenAmount(
                                  account.balance,
                                  account.token.decimals
                                )}
                                accountIndex={account.accountIndex}
                              />
                            </div>
                          ))}
                        </InfiniteScroll>
                      </div>
                    </section>
                  </>
                );
              }
              default: {
                return <></>;
              }
            }
          })()}

          {(() => {
            switch (transactionsTask.status) {
              case "loading": {
                return <Spinner />;
              }
              case "failed": {
                return <p>{transactionsTask.error}</p>;
              }
              case "reloading":
              case "successful": {
                return (
                  <section>
                    <div
                      className={clsx({
                        [classes.hidden]: true,
                        [classes.secondTabVisible]: isSecondTabVisible,
                      })}
                    >
                      <InfiniteScroll
                        asyncTaskStatus={transactionsTask.status}
                        paginationData={transactionsTask.data.pagination}
                        onLoadNextPage={(fromItem) => {
                          if (transactionsTask.status === "successful") {
                            onLoadTransactions(
                              accountsTask.data.accounts[0].hezEthereumAddress,
                              fromItem
                            );
                          }
                        }}
                      >
                        <TransactionsList transactions={transactionsTask.data.transactions} />
                      </InfiniteScroll>
                    </div>
                  </section>
                );
              }
              default: {
                return <></>;
              }
            }
          })()}
        </div>
      </Container>
    </div>
  );
}

UserAccount.propTypes = {
  onLoadAccounts: PropTypes.func.isRequired,
  accountsTask: PropTypes.object.isRequired,
  onLoadTransactions: PropTypes.func.isRequired,
  transactionsTask: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  accountsTask: state.userAccount.accountsTask,
  transactionsTask: state.userAccount.transactionsTask,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadAccounts: (address, fromItem) => dispatch(fetchAccounts(address, fromItem)),
  onLoadTransactions: (address, fromItem) => dispatch(fetchTransactions(address, fromItem)),
  onCleanup: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
