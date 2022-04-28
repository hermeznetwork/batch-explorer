import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTheme } from "react-jss";

import useHomeStyles from "./home.styles";
import Spinner from "../shared/spinner/spinner.view";
import Container from "../shared/container/container.view";
import BatchesList from "./components/batches-list/batches-list.view";
import NetworkStatusIndicator from "./components/network-status-indicator/network-status-indicator.view";
import { fetchBatches } from "../../store/home/home.thunks";
import InfiniteScroll from "../shared/infinite-scroll/infinite-scroll.view";
import { resetState } from "../../store/home/home.actions";
import Title from "../shared/title/title";

function Home({ onLoadBatches, batchesTask, onCleanup }) {
  React.useEffect(() => {
    onLoadBatches();
  }, [onLoadBatches]);

  React.useEffect(() => onCleanup, [onCleanup]);

  const theme = useTheme();
  const classes = useHomeStyles();

  return (
    <div className={classes.root}>
      <Container backgroundColor={theme.palette.primary.main} disableTopGutter>
        <div className={classes.wrapper}>
          <div className={classes.networkStatusTitle}>
            <Title>Network Status:</Title>
          </div>
          <NetworkStatusIndicator />
          <Title>Batches</Title>
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
                  <section className={classes.section}>
                    <InfiniteScroll
                      asyncTaskStatus={batchesTask.status}
                      paginationData={batchesTask.data.pagination}
                      onLoadNextPage={(fromItem) => {
                        if (batchesTask.status === "successful") {
                          onLoadBatches(fromItem);
                        }
                      }}
                    >
                      <BatchesList batches={batchesTask.data.batches} />
                    </InfiniteScroll>
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

Home.propTypes = {
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  batchesTask: state.home.batchesTask,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: (fromItem) => dispatch(fetchBatches(fromItem)),
  onCleanup: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
