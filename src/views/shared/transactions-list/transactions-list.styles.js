import { createUseStyles } from "react-jss";

const useTransactionsListStyles = createUseStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
  },
  link: {
    width: theme.spacing(40),
  },
  col: {
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
    "&:last-child": {
      width: theme.spacing(20),
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      textAlign: "right",
    },
  },
}));

export default useTransactionsListStyles;
