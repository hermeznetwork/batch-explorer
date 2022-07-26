import { createUseStyles } from "react-jss";

const useHomeStyles = createUseStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  },
  wrapper: {
    width: "100%",
  },
  networkStatusRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: theme.spacing(4),
  },
  networkStatusTitle: {
    marginRight: theme.spacing(2),
    "& h4": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  networkStatus: {
    fontWeight: theme.fontWeights.medium,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
    borderRadius: 14,
    background: theme.palette.green.light,
    color: theme.palette.green.main,
  },
}));

export default useHomeStyles;
