import { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { AlertModalContext } from "../../context/alertModalContext";
import useAxios from "../../hooks/useAxios";
import DefaultButton from "../UI/button/DefaultButton";
import { todoAPI } from "../../utils/axiosInstance";
const Container = styled.div`
  width: 100%;
  padding: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 15%;
    height: 35px;
  }
`;

export const Textarea = styled.textarea`
  height: 35px;
  width: 85%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  padding-top: 8px;
  text-indent: 5px;
  margin-right: 5px;
  :focus {
    outline: 0.5px solid #95d1cc;
  }
`;
const TodoEditor = ({ todoList, setTodoList }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const handlecreateTodo = useAxios(todoAPI.createTodoItem);
  const alertModal = useContext(AlertModalContext);
  const submitTodo = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    handlecreateTodo([contentRef.current.value], {
      onSuccess: (result) => {
        setTodoList([...todoList, result]);
        setContent("");
        contentRef.current.value = "";
        contentRef.current.focus();
      },
      onError: (msg) => alertModal.show(msg),
    });
  };
  useEffect(() => {
    contentRef.current.focus();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Textarea
          placeholder="todo를 입력해주세요"
          value={content}
          ref={contentRef}
          onChange={(e) => setContent(e.target.value)}
        />
        <DefaultButton text={"추가"} type={"mint"} width="short" onClick={submitTodo} />
      </Wrapper>
    </Container>
  );
};
export default TodoEditor;
