/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../context/todoListContext";
import useAxios from "../../hooks/useAxios";
import DefaultButton from "../UI/button/DefaultButton";
import { Textarea } from "./TodoEditor";
import { todoAPI } from "../../utils/axiosInstance";
import { AlertModalContext } from "../../context/alertModalContext";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0px;
  padding: 5px;
  border-radius: 5px;
  textarea {
    height: 30px;
    width: 100%;
  }
  :hover {
    background-color: #f3ece1;
  }
`;
const TodoWrapper = styled.div`
  display: flex;
  width: 100%;
  .checkbox {
    margin-right: 10px;
    cursor: pointer;
    width: 20px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  button {
    margin-left: 3px;
  }
`;
const TodoContent = styled.div`
  .completed {
    text-decoration: line-through;
  }
`;
const TodoItem = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({
    todo: data.todo,
    isCompleted: data.isCompleted,
  });

  const handleContentChange = (e) => {
    setEditTodo({ ...editTodo, todo: e.target.value });
  };
  const handleIsCompletedChange = (e) => {
    setEditTodo({ ...editTodo, isCompleted: e.target.checked });
  };
  const { todoList, setTodoList } = useContext(TodoListContext);
  const handleUpdateTodo = useAxios(todoAPI.updateTodoItem);
  const alertModal = useContext(AlertModalContext);
  const submitEditedTodo = () => {
    handleUpdateTodo([editTodo.todo, editTodo.isCompleted, data.id], {
      onSuccess: (data) => {
        const newList = todoList.map((el) => (el.id === data.id ? data : el));
        setTodoList(newList);
        setIsEdit(false);
      },
      onError: (msg) => alertModal.show(msg),
    });
  };

  useEffect(() => {
    submitEditedTodo();
  }, [editTodo.isCompleted]);
  const handleDeleteTodo = useAxios(todoAPI.deleteTodoItem);
  const deleteTodo = () => {
    handleDeleteTodo([data.id], {
      onSuccess: () => {
        setTodoList((prev) => prev.filter((el) => el.id !== data.id));
      },
      onError: (msg) => alertModal.show(msg),
    });
  };
  return (
    <ItemContainer>
      {isEdit ? (
        <>
          <TodoWrapper>
            <Textarea value={editTodo.todo} onChange={handleContentChange} />
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton text={"제출"} type={"mint"} width={"short"} onClick={submitEditedTodo} />
            <DefaultButton text={"취소"} width={"short"} onClick={() => setIsEdit(false)} />
          </ButtonWrapper>
        </>
      ) : (
        <>
          <TodoWrapper>
            <input
              type="checkbox"
              checked={editTodo.isCompleted}
              onChange={handleIsCompletedChange}
              className="checkbox"
            />
            <TodoContent className={editTodo.isCompleted ? "completed" : ""}>
              {editTodo.todo}
            </TodoContent>
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton
              text={"수정"}
              type={"mint"}
              width={"short"}
              onClick={() => setIsEdit(true)}
            />
            <DefaultButton text={"삭제"} type={"red"} width={"short"} onClick={deleteTodo} />
          </ButtonWrapper>
        </>
      )}
    </ItemContainer>
  );
};
export default TodoItem;
