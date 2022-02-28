import PropTypes from "prop-types";

import Batch from "../batch/batch.view";
import useBatchesListStyles from "./batches-list.styles";

function BatchesList({ batches }) {
  const classes = useBatchesListStyles();

  return (
    <section className={classes.row}>
      {batches.map((batch) => (
        <Batch batch={batch} key={batch.itemId} />
      ))}
    </section>
  );
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNum: PropTypes.number.isRequired,
    })
  ),
};

export default BatchesList;
