import styled from "styled-components";
import SignIn from "../components/Common/SignIn";
import SignUp from "../components/Common/Signup";
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Home = () => {
  return (
    <Container>
      <SignUp />
      <SignIn />
    </Container>
  );
};
export default Home;
