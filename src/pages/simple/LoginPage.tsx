import React, { useState } from "react";

import styled from "styled-components";

const LoginFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
`;

const LoginPage = () => {
  const [info, setInfo] = useState({ email: "", password: "" });

  return (
    <>
      <h1>나만의 서지정보 검색시스템</h1>
      <LoginForm
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="가입한 이메일을 입력하세요"
          id="id"
          onChange={(e) => {
            setInfo((prevProps) => {
              console.log(e.target.value);
              return { ...prevProps, email: e.target.value };
            });
          }}
        />
        <button type="submit">보내기</button>
      </LoginForm>
    </>
  );
};

export default LoginPage;
