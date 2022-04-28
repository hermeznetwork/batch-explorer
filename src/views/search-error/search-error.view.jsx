import { Link, useParams } from "react-router-dom";

import Container from "../shared/container/container.view";
import Title from "../shared/title/title";
import useSearchErrorStyles from "./search-error.styles";

function SearchError() {
  const classes = useSearchErrorStyles();
  const { searchTerm } = useParams();

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>We cannot find: {searchTerm}</Title>
          <div>
            Please use an existing address, a transaction hash, a batch number or account index.
          </div>
          <div className={classes.backButtonWrapper}>
            <Link to="/" className={classes.backButton}>
              Back Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SearchError;
