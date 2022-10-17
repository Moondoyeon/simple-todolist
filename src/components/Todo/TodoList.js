import styled from "styled-components";
import TodoItem from "./TodoItem";
const Container = styled.div`
  width: 50%;
  margin: 5px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const TodoList = ({ todoList, setUpdatedList }) => {
  return (
    <Container>
      <Title>Todo리스트</Title>
      {todoList.map((el) => (
        <TodoItem
          data={el}
          key={el.id}
          setUpdatedList={setUpdatedList}
          todoList={todoList}
        />
      ))}
    </Container>
  );
};
export default TodoList;
