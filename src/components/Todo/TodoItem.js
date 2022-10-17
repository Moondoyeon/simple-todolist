/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../UI/button/DefaultButton";
import { Textarea } from "./TodoEditor";
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px 0px;
  textarea {
    height: 30px;
    width: 100%;
  }
`;
const TodoWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  button {
    margin-left: 3px;
  }
`;
const TodoContent = styled.div``;
const TodoItem = ({ data, setUpdatedList, todoList }) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const access_token = JSON.parse(localStorage.getItem("access_token"));
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({
    todo: data.todo,
    isCompleted: data.isCompleted,
  });
  const id = data.id;

  const handleContentChange = (e) => {
    setEditTodo({ ...editTodo, todo: e.target.value });
  };
  const handleIsCompletedChange = (e) => {
    setEditTodo({ ...editTodo, isCompleted: e.target.checked });
  };

  const submitEditedTodo = () => {
    axios
      .put(`${PROXY}/todos/${id}`, editTodo, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then(() => {
        const newList = todoList.map((el) =>
          el.id === data.id
            ? {
                id: data.id,
                todo: editTodo.todo,
                isCompleted: editTodo.isCompleted,
                userId: data.userId,
              }
            : el
        );
        setUpdatedList(newList);
        setIsEdit(false);
      })
      .catch(() => alert("죄송합니다 잠시후 시도해주세요"));
  };

  useEffect(() => {
    submitEditedTodo();
  }, [editTodo.isCompleted]);

  const deleteTodo = () => {
    if (window.confirm("정말로 삭제하실건가요?")) {
      axios
        .delete(`${PROXY}/todos/${id}`, {
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then(() => {
          const newList = todoList.filter((el) => el.id !== data.id);
          setUpdatedList(newList);
        });
    }
  };
  return (
    <ItemContainer>
      {isEdit ? (
        <>
          <TodoWrapper>
            <Textarea value={editTodo.todo} onChange={handleContentChange} />
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton
              text={"제출"}
              type={"mint"}
              width={"short"}
              onClick={submitEditedTodo}
            />
            <DefaultButton
              text={"취소"}
              width={"short"}
              onClick={() => setIsEdit(false)}
            />
          </ButtonWrapper>
        </>
      ) : (
        <>
          <TodoWrapper>
            <input
              type="checkbox"
              checked={editTodo.isCompleted}
              onChange={handleIsCompletedChange}
            />
            <TodoContent>{editTodo.todo}</TodoContent>
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton
              text={"수정"}
              type={"mint"}
              width={"short"}
              onClick={() => setIsEdit(true)}
            />
            <DefaultButton
              text={"삭제"}
              type={"red"}
              width={"short"}
              onClick={deleteTodo}
            />
          </ButtonWrapper>
        </>
      )}
    </ItemContainer>
  );
};
export default TodoItem;
