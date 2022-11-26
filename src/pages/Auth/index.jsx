import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import DefaultInput from "../../components/UI/input/DefaultInput";
import DefaultButton from "../../components/UI/button/DefaultButton";

import { AlertModalContext } from "../../context/alertModalContext";
import { MSG_01, MSG_02 } from "../../constants/messages";
import { EMAIL_REGEXP, PW_REGEXP } from "../../constants/regexp";

import useAxios from "../../hooks/useAxios";
import useInput from "../../hooks/useInput";
import { Container, Title } from "./style";
import { authAPI } from "../../api/apis";

const Auth = () => {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);
  const trySignUp = useAxios(authAPI.trySignUp);
  const trySignIn = useAxios(authAPI.trySignIn);
  const alertModal = useContext(AlertModalContext);

  const {
    value: email,
    isValid: isValidEmail,
    inputChangeHanlder: emailChangeHandler,
    resetInputValue: resetEmail,
    message: emailMessage,
  } = useInput(EMAIL_REGEXP, MSG_01);
  const {
    value: password,
    isValid: isValidPassword,
    inputChangeHanlder: passwordChangeHandler,
    resetInputValue: resetPassword,
    message: passwordMessage,
  } = useInput(PW_REGEXP, MSG_02);

  const setAccessToken = (token) => {
    localStorage.setItem("access_token", JSON.stringify(token.access_token));
  };
  const submitAuthInfo = () => {
    const handler = loginMode ? trySignIn : trySignUp;
    handler([email, password], {
      onSuccess: (data) => {
        console.log(data);
        setAccessToken(data);
        navigate("/todo");
      },
      onError: (msg) => alertModal.show(msg),
    });
  };
  const changeAuthMode = () => {
    setLoginMode(!loginMode);
    resetEmail();
    resetPassword();
  };
  return (
    <Container>
      <Title>{loginMode ? "로그인" : "회원가입"}</Title>
      <form>
        <DefaultInput
          type="text"
          name="email"
          value={email}
          onChange={emailChangeHandler}
          placeholder="이메일"
          message={loginMode ? ">" : emailMessage}
        />
        <DefaultInput
          type="password"
          name="password"
          value={password}
          onChange={passwordChangeHandler}
          placeholder="비밀번호"
          message={loginMode ? ">" : passwordMessage}
        />
      </form>
      <DefaultButton
        text={loginMode ? "로그인" : "회원가입"}
        type={"mint"}
        onClick={submitAuthInfo}
        disabled={!(isValidEmail && isValidPassword)}
      />
      <DefaultButton
        text={loginMode ? "아직 회원이 아니신가요?" : "이미 계정이 있으신가요?"}
        onClick={changeAuthMode}
      />
    </Container>
  );
};
export default Auth;
