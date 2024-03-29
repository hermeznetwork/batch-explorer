import { createUseStyles } from "react-jss";

const useSpinnerStyles = createUseStyles((theme) => ({
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(3),
  },
  container: ({ size }) => ({
    width: size,
    height: size,
    overflow: "hidden",
  }),
  svg: {
    animation: "$spin 0.8s linear infinite",
  },
  topCircle: {
    stroke: theme.palette.purple.main,
    strokeLinecap: "round",
    strokeDasharray: "30px 200px",
    strokeDashoffset: "0px",
  },
  bottomCircle: {
    stroke: theme.palette.purple.main,
    strokeOpacity: 0.2,
  },
}));

export default useSpinnerStyles;
