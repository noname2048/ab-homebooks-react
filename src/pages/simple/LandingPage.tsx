import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const LandingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LandingPage = () => {
  return (
    <LandingDiv>
      <h1>나만의 서지정보 시스템</h1>
      <Link to="/simple/login">로그인하기</Link>
    </LandingDiv>
  );
};

export default LandingPage;
