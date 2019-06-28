import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>React app to search GitHub users</p>
      <p>
        Version: 1.2.3{" "}
        <span role='img' aria-label='Cowboy Face'>
          {" "}
          🤠
        </span>
      </p>
    </Fragment>
  );
};

export default About;
