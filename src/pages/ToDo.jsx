/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import TodoEditor from "../components/Todo/TodoEditor";
import TodoList from "../components/Todo/TodoList";
import { AlertModalContext } from "../context/alertModalContext";
import { TodoListContext } from "../context/todoListContext";
import useAxios from "../hooks/useAxios";
import { todoAPI } from "../utils/axiosInstance";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 15px;
`;
const ToDo = () => {
  const handleGetTodoList = useAxios(todoAPI.getTodoList);
  const alertModal = useContext(AlertModalContext);
  const { todoList, setTodoList } = useContext(TodoListContext);
  useEffect(() => {
    handleGetTodoList([], {
      onSuccess: (data) => {
        setTodoList(data);
      },
      onError: (msg) => alertModal.show(msg),
    });
  }, []);

  return (
    <Container>
      <TodoEditor todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </Container>
  );
};
export default ToDo;
