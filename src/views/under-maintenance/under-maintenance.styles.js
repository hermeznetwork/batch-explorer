import { createUseStyles } from "react-jss";

const useUnderMaintenanceStyles = createUseStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  image: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(21),
    },
  },
  text: {
    marginTop: theme.spacing(5),
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacing(2.5),
    lineHeight: `${theme.spacing(4)}px`,
    textAlign: "center",
  },
}));

export default useUnderMaintenanceStyles;
