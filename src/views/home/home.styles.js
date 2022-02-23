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
  networkStatusTitle: {
    display: "inline-block",
    marginRight: theme.spacing(2),
    "& h4": {
      marginTop: theme.spacing(4),
      marginBottom: 0,
    },
  },
}));

export default useHomeStyles;
