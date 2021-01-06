import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Button styles
const useStyles = makeStyles({
  root: {
    border: "1px solid #3fc060",
    color: "#3fc060",
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

const Result = (props) => {
  // destructuring props
  const { id, title, year, results, nominees, nominate } = props;
  // btn styles
  const classes = useStyles();
  // btn nominate function
  const handleAdd = () => {
    nominate(results[id]);
  };
  // conditional rendering button
  let isNominated = false;
  // set isNominated to true if a search result's imdbID matches that of an nominee
  nominees.forEach((nomItem) => {
    if (nomItem.imdbID === results[id].imdbID) {
      isNominated = true;
    }
  });

  return (
    <div className="list-item" data-id={id}>
      <p>
        {title} <span>({year})</span>
      </p>
      {isNominated ? (
        <Button disabled>Nominated</Button>
      ) : (
        <Button classes={{ root: classes.root, label: classes.label }} onClick={handleAdd}>
          Nominate
        </Button>
      )}
    </div>
  );
};
export default Result;
