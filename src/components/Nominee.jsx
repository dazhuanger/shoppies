import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import { useSpring, animated } from "react-spring";

// Button styles
const useStyles = makeStyles({
  root: {
    border: "1px solid #007aff",
    color: "#007aff",
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

const Nominee = (props) => {
  // destructuring props
  const { id, title, year, remove } = props;
  // btn styles
  const classes = useStyles();
  //btn remove function
  const handleRemove = () => {
    remove(id);
  };

  // animation styles
  // const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="list-item">
      <span className="num">{id + 1}.</span>
      <p>
        {title} <span>({year})</span>
      </p>
      <Button classes={{ root: classes.root, label: classes.label }} onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};
export default Nominee;
