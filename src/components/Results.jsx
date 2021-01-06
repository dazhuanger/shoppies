import React from "react";
import Result from "./Result";
import Popup from "./Popup";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Results = (props) => {
  //destructuring props
  const { results, nominees, nominate, popup, closePopup } = props;
  return (
    <div className="results">
      <h2>Results</h2>
      {popup && <Popup closePopup={closePopup} />}
      <TransitionGroup>
        {results.map((item, index) => {
          return (
            <CSSTransition key={index} timeout={300} classNames="animate">
              <Result
                key={index}
                id={index}
                title={item.Title}
                year={item.Year}
                results={results}
                nominees={nominees}
                nominate={nominate}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
export default Results;
