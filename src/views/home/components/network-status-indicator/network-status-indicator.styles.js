import { createUseStyles } from "react-jss";

const useNetworkStatusIndicatorStyles = createUseStyles((theme) => ({
  status: {
    fontWeight: theme.fontWeights.medium,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
    marginTop: theme.spacing(2),
    marginBottom: 0,
    borderRadius: 14,
    width: "fit-content",
    display: "inline-block",
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(3.5),
      marginBottom: theme.spacing(1),
    },
  },
  unavailable: {
    background: theme.palette.red.veryLight,
    color: theme.palette.red.main,
  },
  degraded: {
    background: theme.palette.secondary.veryLight,
    color: theme.palette.secondary.dark,
  },
  operational: {
    background: theme.palette.green.light,
    color: theme.palette.green.main,
  },
}));

export default useNetworkStatusIndicatorStyles;
