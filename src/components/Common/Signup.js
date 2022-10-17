import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { MSG_01, MSG_02, MSG_03, MSG_04 } from "../../constants/messages";
import { EMAIL_REGEXP, PW_REGEXP } from "../../constants/regexp";
import DefaultButton from "../../UI/button/DefaultButton";
import DefaultInput from "../../UI/input/DefaultInput";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SignUp = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    email: ">",
    password: ">",
  });
  const isValidEmail = (email) => {
    return EMAIL_REGEXP.test(email);
  };
  const isValidPW = (pw) => {
    return PW_REGEXP.test(pw);
  };

  const handleSignUpInfoChange = (e) => {
    const { value, name } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
    switch (name) {
      case "email":
        isValidEmail(value)
          ? setMessage({ ...message, email: ">" })
          : setMessage({ ...message, email: MSG_01 });
        break;
      case "password":
        isValidPW(value)
          ? setMessage({ ...message, password: ">" })
          : setMessage({ ...message, password: MSG_03 });
        break;
      default:
        setMessage({
          ...{ email: ">", password: ">" },
        });
    }
  };

  const trySignUp = () => {
    if (isValidEmail(signUpInfo.email) && isValidPW(signUpInfo.password)) {
      axios
        .post(`${PROXY}/auth/signup`, signUpInfo)
        .then(() => {
          alert("회원가입에 성공했습니다. 로그인 해주세요 :)");
          setSignUpInfo({
            email: "",
            password: "",
          });
        })
        .catch(() => {
          alert(MSG_02);
        });
    } else {
      alert(MSG_04);
    }
  };
  return (
    <Container>
      <Title>회원가입</Title>
      <form>
        <DefaultInput
          type="text"
          label={"이메일"}
          name="email"
          value={signUpInfo.email}
          onChange={handleSignUpInfoChange}
          message={message.email}
          placeholder="이메일을 입력해주세요"
        />
        <DefaultInput
          type="password"
          label={"비밀번호"}
          name="password"
          value={signUpInfo.password}
          onChange={handleSignUpInfoChange}
          message={message.password}
          placeholder="영문 소문자, 숫자, 특수문자 조합 8자 이상의 비밀번호"
        />
      </form>
      <DefaultButton text={"회원가입"} type={"mint"} onClick={trySignUp} />
    </Container>
  );
};
export default SignUp;
