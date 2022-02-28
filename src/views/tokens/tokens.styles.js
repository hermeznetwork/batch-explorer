import { createUseStyles } from "react-jss";

const useTokensStyles = createUseStyles((theme) => ({
  wrapper: {
    width: "100%",
  },
  addTokenButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.grey.veryLight,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2.5)}px`,
    borderRadius: 16,
    marginTop: theme.spacing(5),
    display: "inline-flex",
  },
}));

export default useTokensStyles;
