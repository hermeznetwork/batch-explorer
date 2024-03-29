import { createUseStyles } from "react-jss";

const useContainerStyles = createUseStyles((theme) => ({
  root: {
    width: "100%",
    background: ({ backgroundColor }) => backgroundColor || theme.white,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    maxWidth: 900,
    margin: "auto",
    padding: ({ disableVerticalGutters, disableTopGutter }) =>
      disableVerticalGutters
        ? `0 ${theme.spacing(3.5)}px`
        : disableTopGutter
        ? `0 ${theme.spacing(3.5)}px ${theme.spacing(5)}px`
        : `${theme.spacing(5)}px ${theme.spacing(3.5)}px`,
  },
}));

export default useContainerStyles;
