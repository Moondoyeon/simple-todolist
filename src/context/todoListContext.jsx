import React, { useState } from "react";

const TodoListContext = React.createContext({
  todos: [],
  setTodoList: () => {},
});

const TodoListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
export { TodoListContext };
