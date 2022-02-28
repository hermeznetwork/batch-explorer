import { createUseStyles } from "react-jss";

const useBatchStyles = createUseStyles((theme) => ({
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    background: theme.palette.white,
    borderRadius: "24px",
    minHeight: theme.spacing(19.5),
    width: "100%",
    marginBottom: theme.spacing(3),
    padding: `${theme.spacing(2.5)}px ${theme.spacing(2.5)}px ${theme.spacing(4)}px`,
    [theme.breakpoints.sm]: {
      width: theme.spacing(33.5),
    },
  },
  batchWrapper: {
    width: "100%",
  },
  batch: {
    background: theme.palette.grey.veryLight,
    borderRadius: theme.spacing(2),
    color: theme.palette.grey.main,
    padding: theme.spacing(2),
    textAlign: "center",
    "&:hover": {
      background: theme.palette.grey.light,
    },
  },
  transaction: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
  },
  transactionNumber: {
    fontWeight: theme.fontWeights.extraBold,
  },
  coordinator: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  coordinatorLink: {
    color: theme.palette.secondary.main,
    fontWeight: theme.fontWeights.extraBold,
    marginLeft: theme.spacing(1),
  },
  time: {
    color: theme.palette.grey.main,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
}));

export default useBatchStyles;
