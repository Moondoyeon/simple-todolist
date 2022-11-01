import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MSG_01, MSG_02 } from "../constants/messages";
import styled from "styled-components";
import DefaultInput from "../components/UI/input/DefaultInput";
import DefaultButton from "../components/UI/button/DefaultButton";
import { EMAIL_REGEXP, PW_REGEXP } from "../constants/regexp";
import IsValidInfo from "../utils/IsValidInfo";
import useAxios from "../hooks/useAxios";
import { authAPI } from "../utils/axiosInstance";
import { useContext } from "react";
import { AlertModalContext } from "../context/alertModalContext";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const Auth = () => {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);
  const trySignUp = useAxios(authAPI.trySignUp);
  const trySignIn = useAxios(authAPI.trySignIn);
  const alertModal = useContext(AlertModalContext);
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    email: ">",
    password: ">",
  });
  const handleLoginInfoChange = (e) => {
    const { value, name } = e.target;
    setAuthInfo({
      ...authInfo,
      [name]: value,
    });
    switch (name) {
      case "email":
        IsValidInfo(EMAIL_REGEXP, value)
          ? setMessage({ ...message, email: ">" })
          : setMessage({ ...message, email: MSG_01 });
        break;
      case "password":
        IsValidInfo(PW_REGEXP, value)
          ? setMessage({ ...message, password: ">" })
          : setMessage({ ...message, password: MSG_02 });
        break;
      default:
        setMessage({
          ...{ email: ">", password: ">" },
        });
    }
  };
  const setAccessToken = (token) => {
    localStorage.setItem("access_token", JSON.stringify(token.access_token));
  };
  const submitAuthInfo = () => {
    const handler = loginMode ? trySignIn : trySignUp;
    handler([authInfo], {
      onSuccess: (data) => {
        setAccessToken(data);
        navigate("/todo");
      },
      onError: (msg) => alertModal.show(msg),
    });
  };
  const changeAuthMode = () => {
    setLoginMode(!loginMode);
    setAuthInfo({
      email: "",
      password: "",
    });
  };
  return (
    <Container>
      <Title>{loginMode ? "로그인" : "회원가입"}</Title>
      <form>
        <DefaultInput
          type="text"
          name="email"
          value={authInfo.email}
          onChange={handleLoginInfoChange}
          placeholder="이메일"
          message={loginMode ? ">" : message.email}
        />
        <DefaultInput
          type="password"
          name="password"
          value={authInfo.password}
          onChange={handleLoginInfoChange}
          placeholder="비밀번호"
          message={loginMode ? ">" : message.password}
        />
      </form>
      <DefaultButton
        text={loginMode ? "로그인" : "회원가입"}
        type={"mint"}
        onClick={submitAuthInfo}
        disabled={
          !(IsValidInfo(EMAIL_REGEXP, authInfo.email) && IsValidInfo(PW_REGEXP, authInfo.password))
        }
      />
      <DefaultButton
        text={loginMode ? "아직 회원이 아니신가요?" : "이미 계정이 있으신가요?"}
        onClick={changeAuthMode}
      />
    </Container>
  );
};
export default Auth;
