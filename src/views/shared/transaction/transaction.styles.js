import { createUseStyles } from "react-jss";

const useTransactionsListItemStyles = createUseStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
  },
  col: {
    fontWeight: theme.fontWeights.bold,
    "&:last-child": {
      width: theme.spacing(20),
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      textAlign: "right",
    },
    "&:first-child": {
      width: theme.spacing(20),
      paddingRight: theme.spacing(3),
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.sm]: {
        width: theme.spacing(40),
      },
    },
  },
  link: {
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.purple.dark,
      textDecoration: "underline",
    },
  },
  shortAddress: {
    display: "block",
    [theme.breakpoints.sm]: {
      display: "none",
    },
  },
  mediumAddress: {
    display: "none",
    [theme.breakpoints.sm]: {
      display: "block",
      width: theme.spacing(20),
      paddingRight: theme.spacing(3),
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.sm]: {
        width: theme.spacing(40),
      },
    },
  },
}));

export default useTransactionsListItemStyles;
