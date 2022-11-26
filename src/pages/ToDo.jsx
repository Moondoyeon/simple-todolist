/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import TodoEditor from "../components/Todo/TodoEditor/TodoEditor";
import TodoList from "../components/Todo/TodoList/TodoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 15px;
`;
const ToDo = () => {
  return (
    <Container>
      <TodoEditor />
      <TodoList />
    </Container>
  );
};
export default ToDo;
