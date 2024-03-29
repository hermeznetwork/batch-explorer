import { Link } from "react-router-dom";
import { getTimeAgo } from "../../../utils/date";

import Row from "../../shared/row/row";
import Col from "../../shared/col/col";

function Batch({ batch }) {
  return (
    <>
      <Row flex>
        <Col link flex>
          <Link to={`/batch/${batch.batchNum}`}>{batch.batchNum}</Link>
        </Col>
        <Col flex>{getTimeAgo(batch.timestamp)}</Col>
        <Col flex>{batch.forgedTransactions ? batch.forgedTransactions : 0}</Col>
      </Row>
    </>
  );
}

export default Batch;
