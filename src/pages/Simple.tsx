import { Link, Route } from "react-router-dom";

import { default as LandingPage } from "pages/simple/LandingPage";
import { default as LoginPage } from "pages/simple/LoginPage";
import React from "react";

// import styled from "styled-components";

const Simple = () => {
  return (
    <>
      <Route exact path="/simple" component={LandingPage} />
      <Route exact path="/simple/login" component={LoginPage} />
    </>
  );
};

export default Simple;
