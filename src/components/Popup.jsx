import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
// Button styles
const useStyles = makeStyles({
  root: {
    border: "1px solid #fff",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "400",
    minWidth: "102px",
    height: "30px",
    borderRadius: "2px",
  },
  label: {
    textTransform: "capitalize",
  },
});

const Popup = (props) => {
  //destructuring props
  const { closePopup } = props;
  // btn styles
  const classes = useStyles();

  // animation styles
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={spring} className="popup">
      <p>We know making choices is difficult, but you can only nominate up to 5 movies.</p>
      <Button classes={{ root: classes.root, label: classes.label }} onClick={closePopup}>
        Got it
      </Button>
    </animated.div>
  );
};
export default Popup;
