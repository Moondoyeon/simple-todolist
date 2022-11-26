/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";

import { useTodoDispatch } from "../../../context/todoListContext";
import { AlertModalContext } from "../../../context/alertModalContext";
import DefaultButton from "../../UI/button/DefaultButton";
import useAxios from "../../../hooks/useAxios";
import { todoAPI } from "../../../api/apis";
import { Textarea } from "../TodoEditor/style";
import { ItemContainer, TodoWrapper, ButtonWrapper, TodoContent } from "./style";

const TodoItem = ({ id, todo, isCompleted }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState({
    todo: todo,
    isCompleted: isCompleted,
  });

  const handleContentChange = (e) => {
    setEditTodo({ ...editTodo, todo: e.target.value });
  };
  const handleIsCompletedChange = (e) => {
    setEditTodo({ ...editTodo, isCompleted: e.target.checked });
  };

  const { updateTodo, deleteTodo } = useTodoDispatch();
  const handleUpdateTodo = useAxios(todoAPI.updateTodoItem);
  const handleDeleteTodo = useAxios(todoAPI.deleteTodoItem);
  const alertModal = useContext(AlertModalContext);

  const submitUpdatedTodo = () => {
    handleUpdateTodo([editTodo.todo, editTodo.isCompleted, id], {
      onSuccess: (data) => {
        updateTodo(data);
        setIsEditMode(false);
      },
      onError: (msg) => alertModal.show(msg),
    });
  };

  const handleIsCompleteCheckBox = () => {
    handleUpdateTodo([editTodo.todo, !editTodo.isCompleted, id], {
      onSuccess: (data) => {
        updateTodo(data);
        setIsEditMode(false);
      },
      onError: (msg) => alertModal.show(msg),
    });
  };

  const deleteTodoItem = () => {
    handleDeleteTodo([id], {
      onSuccess: () => {
        deleteTodo(id);
      },
      onError: (msg) => alertModal.show(msg),
    });
  };
  const editModHanlder = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <ItemContainer>
      {isEditMode ? (
        <>
          <TodoWrapper>
            <Textarea value={editTodo.todo} onChange={handleContentChange} />
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton
              text={"제출"}
              type={"mint"}
              width={"short"}
              onClick={submitUpdatedTodo}
            />
            <DefaultButton text={"취소"} width={"short"} onClick={editModHanlder} />
          </ButtonWrapper>
        </>
      ) : (
        <>
          <TodoWrapper>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleIsCompletedChange}
              onClick={handleIsCompleteCheckBox}
              className="checkbox"
            />
            <TodoContent className={isCompleted ? "completed" : ""}>{todo}</TodoContent>
          </TodoWrapper>
          <ButtonWrapper>
            <DefaultButton text={"수정"} type={"mint"} width={"short"} onClick={editModHanlder} />
            <DefaultButton text={"삭제"} type={"red"} width={"short"} onClick={deleteTodoItem} />
          </ButtonWrapper>
        </>
      )}
    </ItemContainer>
  );
};
export default TodoItem;
