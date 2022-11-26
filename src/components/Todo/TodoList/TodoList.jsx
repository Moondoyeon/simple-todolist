import React from 'react';
import styled from 'styled-components';
import { useTodoList } from '../../../context/todoListContext';
import TodoItem from '../TodoItem/TodoItem';
const Container = styled.div`
  width: 100%;
`;

const TodoList = () => {
  const { todoList } = useTodoList();
  return (
    <Container>
      {todoList.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </Container>
  );
};
export default TodoList;
