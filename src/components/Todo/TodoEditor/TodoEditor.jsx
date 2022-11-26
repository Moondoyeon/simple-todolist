/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { AlertModalContext } from '../../../context/alertModalContext';
import DefaultButton from '../../UI/button/DefaultButton';
import { Container, Wrapper, Textarea } from './style';
import { todoAPI } from '../../../api/apis';
import useAxios from '../../../hooks/useAxios';
import { useTodoDispatch } from '../../../context/todoListContext';

const TodoEditor = () => {
  const [content, setContent] = useState('');
  const contentRef = useRef();
  const alertModal = useContext(AlertModalContext);

  const { getTodoList, addTodo } = useTodoDispatch();
  const handlecreateTodo = useAxios(todoAPI.createTodoItem);
  const handleGetTodoList = useAxios(todoAPI.getTodoList);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    handleGetTodoList([], {
      onSuccess: (data) => {
        getTodoList(data);
      },
      onError: (msg) => alertModal.show(msg),
    });
    contentRef.current.focus();
  }, []);

  const addTodoItem = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    handlecreateTodo([content], {
      onSuccess: (result) => {
        addTodo(result);
        setContent('');
      },
      onError: (msg) => alertModal.show(msg),
    });
  };

  return (
    <Container>
      <Wrapper>
        <Textarea placeholder="todo를 입력해주세요" value={content} ref={contentRef} onChange={handleContentChange} />
        <DefaultButton text={'추가'} type={'mint'} width="short" onClick={addTodoItem} />
      </Wrapper>
    </Container>
  );
};
export default TodoEditor;
