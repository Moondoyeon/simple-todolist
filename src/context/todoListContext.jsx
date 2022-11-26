import React, { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';

const TodoListContext = React.createContext({
  todos: [],
  setTodoList: () => {},
});
const TodoDispatchContext = React.createContext(null);

export const useTodoList = () => useContext(TodoListContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);

const TodoListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const getTodoList = useCallback((todoList) => {
    setTodoList(todoList);
  }, []);
  const addTodo = useCallback((newTodo) => {
    setTodoList((prev) => [newTodo, ...prev]);
  }, []);
  const updateTodo = useCallback((editedTodo) => {
    setTodoList((prev) => prev.map((el) => (el.id === editedTodo.id ? editedTodo : el)));
  }, []);
  const deleteTodo = useCallback((id) => {
    setTodoList((prev) => prev.filter((el) => el.id !== id));
  }, []);
  const todoDispatch = useMemo(
    () => ({
      getTodoList,
      addTodo,
      updateTodo,
      deleteTodo,
    }),
    [getTodoList, addTodo, updateTodo, deleteTodo]
  );
  return (
    <TodoListContext.Provider value={{ todoList }}>
      <TodoDispatchContext.Provider value={todoDispatch}>{children}</TodoDispatchContext.Provider>
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
export { TodoListContext, TodoDispatchContext };
