import { Link } from "react-router-dom";

import Row from "../../../shared/row/row";
import Col from "../../../shared/col/col";
import { getFixedTokenAmount } from "../../../../utils/currencies";
import { HEZ_TOKEN_DECIMALS } from "../../../../constants";

function SlotDetails({ slot, totalNumberOfBidsInSlot }) {
  if (slot.openAuction) {
    return (
      <div>
        <Row>
          <Col>Status</Col>
          <Col>Open Auction</Col>
        </Row>
        <Row>
          <Col>Bids</Col>
          <Col>{totalNumberOfBidsInSlot}</Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col>Status</Col>
          <Col>Closed Auction</Col>
        </Row>
        <Row>
          <Col>Bids</Col>
          <Col>{totalNumberOfBidsInSlot}</Col>
        </Row>
        {slot.bestBid ? (
          <>
            <Row>
              <Col>Winner bid</Col>
              <Col>{getFixedTokenAmount(slot.bestBid.bidValue, HEZ_TOKEN_DECIMALS)} HEZ</Col>
            </Row>
            <Row>
              <Col>Coordinator</Col>
              <Col link>
                <Link to={`/coordinator/${slot.bestBid.forgerAddr}`}>
                  {slot.bestBid.forgerAddr}
                </Link>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default SlotDetails;
