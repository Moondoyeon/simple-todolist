import styled from "styled-components";
import TodoItem from "./TodoItem";
const Container = styled.div`
  width: 100%;
`;

const TodoList = ({ todoList }) => {
  return (
    <Container>
      {todoList.map((el) => (
        <TodoItem data={el} key={el.id} />
      ))}
    </Container>
  );
};
export default TodoList;
