import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import clsx from "clsx";

import useSlotStyles from "./slot.styles";
import Spinner from "../shared/spinner/spinner.view";
import Container from "../shared/container/container.view";
import SlotDetails from "./components/slot-details/slot-details.view";
import BidsList from "../shared/bids-list/bids-list.view";
import BatchesList from "../shared/batches-list/batches-list.view";
import { fetchSlot, fetchBids, fetchBatches } from "../../store/slot/slot.thunks";
import InfiniteScroll from "../shared/infinite-scroll/infinite-scroll.view";
import { resetState } from "../../store/slot/slot.actions";
import Title from "../shared/title/title";

function Slot({
  onLoadSlot,
  slotTask,
  onLoadBids,
  bidsTask,
  onLoadBatches,
  batchesTask,
  onCleanup,
}) {
  const classes = useSlotStyles();
  const { slotNum } = useParams();
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
    onLoadSlot(slotNum);
    onLoadBids(slotNum);
  }, [slotNum, onLoadSlot, onLoadBids]);

  React.useEffect(() => {
    if (slotTask.status === "successful") {
      onLoadBatches(slotNum);
    }
  }, [slotTask, slotNum, onLoadBatches]);

  React.useEffect(() => onCleanup, [onCleanup]);

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>Slot</Title>
          {(() => {
            switch (slotTask.status) {
              case "loading": {
                return <Spinner />;
              }
              case "failed": {
                return <p>{slotTask.error}</p>;
              }
              case "successful": {
                switch (bidsTask.status) {
                  case "loading": {
                    return <Spinner />;
                  }
                  case "failed": {
                    return <p>{bidsTask.error}</p>;
                  }
                  case "reloading":
                  case "successful": {
                    return (
                      <>
                        <section>
                          <Title>Slot {slotTask.data.slotNum}</Title>
                          <SlotDetails
                            slot={slotTask.data}
                            totalNumberOfBidsInSlot={bidsTask.data.totalNumberOfBidsInSlot}
                          />
                        </section>
                        <section>
                          {batchesTask.status === "reloading" ||
                          batchesTask.status === "successful" ? (
                            <>
                              <div className={classes.toggleWrapper}>
                                <button
                                  className={clsx({
                                    [classes.toggle]: true,
                                    [classes.active]: true,
                                    [classes.notActive]: isSecondTabVisible,
                                  })}
                                  onClick={() => handleFirstTabClick()}
                                >
                                  Bids
                                </button>
                                <button
                                  className={clsx({
                                    [classes.toggle]: true,
                                    [classes.active]: isSecondTabVisible,
                                    [classes.notActive]: isFirstTabVisible,
                                  })}
                                  onClick={() => handleSecondTabClick()}
                                >
                                  Batches in slot
                                </button>
                              </div>

                              <div
                                className={clsx({
                                  [classes.hidden]: isSecondTabVisible,
                                  [classes.firstTabVisible]: isFirstTabVisible,
                                })}
                              >
                                <InfiniteScroll
                                  asyncTaskStatus={bidsTask.status}
                                  paginationData={bidsTask.data.pagination}
                                  onLoadNextPage={(fromItem) => {
                                    if (bidsTask.status === "successful") {
                                      onLoadBids(slotNum, undefined, fromItem);
                                    }
                                  }}
                                >
                                  <BidsList bids={bidsTask.data.bids} isSlot />
                                </InfiniteScroll>
                              </div>
                            </>
                          ) : (
                            <>
                              <Title>Bids</Title>
                              <InfiniteScroll
                                asyncTaskStatus={bidsTask.status}
                                paginationData={bidsTask.data.pagination}
                                onLoadNextPage={(fromItem) => {
                                  if (bidsTask.status === "successful") {
                                    onLoadBids(slotNum, undefined, fromItem);
                                  }
                                }}
                              >
                                <BidsList bids={bidsTask.data.bids} isSlot />
                              </InfiniteScroll>
                            </>
                          )}
                        </section>
                      </>
                    );
                  }
                  default: {
                    return <></>;
                  }
                }
              }
              default: {
                return <></>;
              }
            }
          })()}

          {(() => {
            switch (batchesTask.status) {
              case "loading": {
                return <Spinner />;
              }
              case "failed": {
                return <p>{batchesTask.error}</p>;
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
                        asyncTaskStatus={batchesTask.status}
                        paginationData={batchesTask.data.pagination}
                        onLoadNextPage={(fromItem) => {
                          if (batchesTask.status === "successful") {
                            onLoadBatches(undefined, slotNum, fromItem);
                          }
                        }}
                      >
                        <BatchesList batches={batchesTask.data.batches} />
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

Slot.propTypes = {
  onLoadSlot: PropTypes.func.isRequired,
  slotTask: PropTypes.object.isRequired,
  onLoadBids: PropTypes.func.isRequired,
  bidsTask: PropTypes.object.isRequired,
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  slotTask: state.slot.slotTask,
  bidsTask: state.slot.bidsTask,
  batchesTask: state.slot.batchesTask,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadSlot: (slotNum) => dispatch(fetchSlot(slotNum)),
  onLoadBids: (slotNum, fromItem) => dispatch(fetchBids(slotNum, undefined, fromItem)),
  onLoadBatches: (slotNum, fromItem) => dispatch(fetchBatches(undefined, slotNum, fromItem)),
  onCleanup: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slot);
