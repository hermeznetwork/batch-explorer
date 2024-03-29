import { createUseStyles } from "react-jss";

const useSearchStyles = createUseStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  input: {
    border: 0,
    outline: "none",
    caretColor: theme.palette.purple.main,
    height: theme.spacing(6.5),
    padding: `${theme.spacing(2)}px ${theme.spacing(9)}px ${theme.spacing(2)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.grey.main,
    borderRadius: 16,
    width: "100%",
    marginRight: `-${theme.spacing(6.5)}px`,
    textOverflow: "ellipsis",
    [theme.breakpoints.sm]: {
      padding: theme.spacing(2),
    },
    "&::-webkit-outer-spin-button,&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
  button: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    right: 0,
    borderRadius: 16,
    border: 0,
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.purple.dark,
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useSearchStyles;
