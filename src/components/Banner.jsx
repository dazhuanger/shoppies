import React from "react";
import { useSpring, animated } from "react-spring";
import { FacebookShareButton, TwitterShareButton, RedditShareButton } from "react-share";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";

// share button styles
const btnStyles = makeStyles({
  root: {
    outline: "none",
  },
});
const iconStyles = makeStyles({
  root: {
    margin: "0 5px",
    height: "36px",
    width: "36px",
  },
});

const Banner = (props) => {
  //destructuring props
  const { nominees } = props;
  // animation styles
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  // share btn styles
  const btnClasses = btnStyles();
  const iconClasses = iconStyles();

  // nominations quote
  const nominationsQuote = nominees.map((item, index) => {
    return ` ${index + 1}. ${item.Title} (${item.Year})`;
  });

  return (
    <animated.div style={spring} className="banner">
      <p>Great choices! You have nominated 5 movies.</p>
      <FacebookShareButton
        url="http://www.camperstribe.com"
        // quote="Checkout my shoppies nominations!"
        quote={`Check out my Shoppies nominations! ${nominationsQuote}`}
        hashtag="#theshoppies"
        className={btnClasses.root}
      >
        <FacebookIcon className={iconClasses.root} />
      </FacebookShareButton>
      <TwitterShareButton
        title={`Check out my Shoppies nominations! ${nominationsQuote}`}
        hashtags={["theshoppies"]}
        url="http://www.camperstribe.com"
        className={btnClasses.root}
      >
        <TwitterIcon className={iconClasses.root} />
      </TwitterShareButton>
      <RedditShareButton
        url="http://www.camperstribe.com"
        title={`Check out my Shoppies nominations! ${nominationsQuote}`}
        className={btnClasses.root}
      >
        <RedditIcon className={iconClasses.root} />
      </RedditShareButton>
    </animated.div>
  );
};

export default Banner;
