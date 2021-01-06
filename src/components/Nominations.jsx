import React from "react";
import Nominee from "./Nominee";
import Banner from "./Banner";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Nominations = (props) => {
  // destructuring props
  const { nominees, remove } = props;
  // for conditional rendering banner
  let banner = false;
  if (nominees.length === 5) {
    banner = true;
  }

  return (
    <div className="nominations">
      <h2>Nominations</h2>
      {banner && <Banner nominees={nominees} />}
      <TransitionGroup>
        {nominees.map((item, index) => {
          return (
            <CSSTransition key={index} timeout={300} classNames="animate">
              <Nominee key={index} id={index} title={item.Title} year={item.Year} remove={remove} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      {/* {nominees.map((item, index) => {
        return <Nominee key={index} id={index} title={item.Title} year={item.Year} remove={remove} />;
      })} */}
    </div>
  );
};
export default Nominations;
