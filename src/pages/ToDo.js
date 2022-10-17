import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoEditor from "../components/Todo/TodoEditor";
import TodoList from "../components/Todo/TodoList";
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 70vh;
  padding: 15px;
`;
const ToDo = () => {
  const [todoList, setToDoList] = useState([]);
  const access_token = JSON.parse(localStorage.getItem("access_token"));
  useEffect(() => {
    const getTodoList = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}todos`, {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        setToDoList(res.data);
      } catch {
        alert("죄송합니다. 할 일 목록을 불러올 수 없습니다 ㅜ_ㅜ");
      }
    };
    getTodoList();
  }, [access_token, setToDoList]);

  return (
    <Container>
      <TodoList todoList={todoList} setUpdatedList={setToDoList} />
      <TodoEditor todoList={todoList} setUpdatedList={setToDoList} />
    </Container>
  );
};
export default ToDo;
