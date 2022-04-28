import { Link } from "react-router-dom";
import getPartiallyHiddenAddress from "../../../utils/address-shortener";

import useBidStyles from "./bid.styles";
import Row from "../../shared/row/row";
import Col from "../../shared/col/col";
import { getFixedTokenAmount } from "../../../utils/currencies";
import { HEZ_TOKEN_DECIMALS } from "../../../constants";

function Bid({ forgerAddr, bidValue, totalNumberOfBidsInSlot, slotNum, isSlot }) {
  const classes = useBidStyles();

  if (isSlot) {
    return (
      <Row flex>
        <Col link flex>
          <Link to={`/coordinator/${forgerAddr}`}>
            <span className={classes.shortenedAddress}>
              {getPartiallyHiddenAddress(forgerAddr)}
            </span>
            <span className={classes.notShortenedAddress}>{forgerAddr}</span>
          </Link>
        </Col>
        <Col flex>{getFixedTokenAmount(bidValue, HEZ_TOKEN_DECIMALS)} HEZ</Col>
      </Row>
    );
  } else {
    return (
      <Row flex>
        <Col link flex>
          <Link to={`/slot/${slotNum}`}>{slotNum}</Link>
        </Col>
        <Col flex>{totalNumberOfBidsInSlot}</Col>
        <Col flex>{getFixedTokenAmount(bidValue, HEZ_TOKEN_DECIMALS)} HEZ</Col>
      </Row>
    );
  }
}

export default Bid;
