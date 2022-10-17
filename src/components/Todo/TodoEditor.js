import axios from "axios";
import { useState, useRef } from "react";
import styled from "styled-components";
import DefaultButton from "../../UI/button/DefaultButton";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5px;
  button {
    padding: 5px;
    margin-top: 5px;
  }
`;
const Title = styled.div`
  font-weight: 600;
`;
export const Textarea = styled.textarea`
  height: 50px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 5px;
  font-size: 14px;
  margin-top: 5px;
  :focus {
    outline: 2px solid #95d1cc;
    border: none;
  }
`;
const TodoEditor = ({ todoList, setUpdatedList }) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const access_token = JSON.parse(localStorage.getItem("access_token"));
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const submitTodo = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    axios
      .post(
        `${PROXY}todos`,
        { todo: content },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        setUpdatedList([...todoList, res.data]);
        setContent("");
      })
      .catch(() => {
        alert("죄송합니다 다음에 시도해주세요");
      });
  };
  return (
    <Container>
      <Title>Todo작성하기</Title>
      <Textarea
        placeholder="todo를 입력해주세요"
        value={content}
        ref={contentRef}
        onChange={(e) => setContent(e.target.value)}
      />
      <DefaultButton text={"작성완료"} type={"mint"} onClick={submitTodo} />
    </Container>
  );
};
export default TodoEditor;
