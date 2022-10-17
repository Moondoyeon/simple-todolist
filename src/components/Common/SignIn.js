import DefaultInput from "../../UI/input/DefaultInput";
import DefaultButton from "../../UI/button/DefaultButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Container, Title } from "./Signup";
import { MSG_04 } from "../../constants/messages";

const SignIn = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleLoginInfoChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  const submitLoginInfo = () => {
    if (!loginInfo.email || !loginInfo.password) {
      alert(MSG_04);
      return;
    }
    axios
      .post(`${PROXY}/auth/signin`, loginInfo)
      .then((res) => {
        localStorage.setItem(
          "access_token",
          JSON.stringify(res.data.access_token)
        );
        navigate("/todo");
      })
      .catch(() => {
        alert(MSG_04);
      });
  };
  return (
    <Container>
      <Title>로그인</Title>
      <form>
        <DefaultInput
          type="text"
          name="email"
          value={loginInfo.email}
          onChange={handleLoginInfoChange}
          placeholder="이메일"
        />
        <DefaultInput
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleLoginInfoChange}
          placeholder="비밀번호"
        />
      </form>
      <DefaultButton text={"로그인"} type={"mint"} onClick={submitLoginInfo} />
    </Container>
  );
};
export default SignIn;
