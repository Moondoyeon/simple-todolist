## ๐ Intro

์ฌํ์ฌํ ํฌ๋๋ฆฌ์คํธ ์๋๋ค.
<a href="https://simple-simple-todolist.netlify.app/">๋ฐฐํฌ๋งํฌ ๋ฐ๋ก๊ฐ๊ธฐ</a>

### ํ์คํธ ๊ณ์ 

<div>id: test774@naver.com</div>
pw: test774!

<br/>

## ๐ฌ ๋ฆฌํฉํ ๋ง ๋ฐ๋ชจ

| ํ์๊ฐ์                                                                                                          | ๋ก๊ทธ์ธ                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![signup](https://user-images.githubusercontent.com/102936206/199159308-72241357-7923-41ea-a480-5ef018e07368.gif) | ![login](https://user-images.githubusercontent.com/102936206/199159824-dcfbe09f-032c-4b8e-8fc8-5301a4b8045d.gif)  |
| ํ ์ผ ์ถ๊ฐ,์กฐํ                                                                                                    | ํ ์ผ ์์ ,์ญ์                                                                                                     |
| ![todoCR](https://user-images.githubusercontent.com/102936206/199160116-a782756d-c909-4098-a0a5-25f48f8a86bf.gif) | ![todoUD](https://user-images.githubusercontent.com/102936206/199160529-82f73f8f-3873-43c9-9678-71e95498f503.gif) |

## ๐ฌ ๋ฆฌํฉํ ๋ง ์  ๋ฐ๋ชจ

| 1.ํ์๊ฐ์ & ๋ก๊ทธ์ธ                                                                                                 | 2.ํ ์ผ ์ถ๊ฐ, ์กฐํ                                                                                                 | 3.ํ ์ผ ์์ , ์ญ์                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![signupIn](https://user-images.githubusercontent.com/102936206/196187399-35908940-e83c-4121-97f2-1917b3ec5aeb.gif) | ![todoCR](https://user-images.githubusercontent.com/102936206/196187484-15f181a5-c44f-4bd3-b450-896318ff6cfc.gif) | ![todoUD](https://user-images.githubusercontent.com/102936206/196187536-b84de763-8eca-422f-8752-7778569233ea.gif) |

## ๐  ๋ฆฌํฉํ ๋ง ๋ฐฉํฅ

1. ํด๋๊ตฌ์กฐ
2. UI/UX
3. ์ํ๊ด๋ฆฌ
4. ์๋ฒ ํต์ 
5. ํ ํฐ ์ ๋ฌด์ ๋ฐ๋ฅธ ๋ฆฌ๋ค์ด๋ ํธ ์ฒ๋ฆฌ
6. ์ต์ ํ

### 1. ํด๋ ๊ตฌ์กฐ

pages, routes, constants, context ๋ฑ ์ปดํฌ๋ํธ ์ญํ ์ ๋ง๊ฒ ํด๋๊ตฌ์กฐ๋ฅผ ๋ณ๊ฒฝํ์ต๋๋ค.

```
.
โโโ App.jsx
โโโ api
โ   โโโ apis.js
โ   โโโ axiosInstance.js
โโโ components
โ   โโโ Todo
โ   โ   โโโ TodoEditor
โ   โ   โ   โโโ TodoEditor.jsx
โ   โ   โ   โโโ style.js
โ   โ   โโโ TodoItem
โ   โ   โ   โโโ TodoItem.jsx
โ   โ   โ   โโโ style.js
โ   โ   โโโ TodoList
โ   โ       โโโ TodoList.jsx
โ   โโโ UI
โ       โโโ AlertModal
โ       โ   โโโ AlertModal.jsx
โ       โโโ button
โ       โ   โโโ DefaultButton.jsx
โ       โโโ input
โ           โโโ DefaultInput.jsx
โโโ constants
โ   โโโ index.js
โ   โโโ messages.js
โ   โโโ regexp.js
โโโ context
โ   โโโ alertModalContext.jsx
โ   โโโ todoListContext.jsx
โโโ hooks
โ   โโโ useAxios.js
โ   โโโ useInput.js
โโโ index.jsx
โโโ pages
โ   โโโ Auth
โ   โ   โโโ index.jsx
โ   โ   โโโ style.jsx
โ   โโโ Todo
โ       โโโ index.jsx
โโโ routes
โ   โโโ AuthRoute.jsx
โโโ styles
โ   โโโ GlobalStyle.js
โ   โโโ mixins.js
โ   โโโ theme.js
โโโ utils
    โโโ IsValidInfo.js
```

### 2. UI/UX

### 2-1. ์๋ฆผ๋ชจ๋ฌ

| ๊ธฐ์กด: ์๋ฐ์คํฌ๋ฆฝํธ์์ ๊ธฐ๋ณธ์ผ๋ก ์ ๊ณตํ๋ ์๋ฆผ์ฐฝ์ ์ฌ์ฉํ์ต๋๋ค.
<br/>

- ์๋ฆผ์ฐฝ์ด ๋์ด์ ธ ์๋ ๋์ ์คํฌ๋ฆฝํธ๊ฐ ์ผ์ ์ ์ง๋์ด ๋์์ ์ ํ์ ๋ฐ๊ณ , ์คํ์ผ๋ง์ด ๋ถ๊ฐ๋ฅํ๋ค๋ ๋จ์ ์ด ์์ต๋๋ค.
  <br/>

| ๋ณ๊ฒฝ: AlertModalContext๋ฅผ ์์ฑ, ์๋ฆผ๋ชจ๋ฌ์ ๋ง๋ค์ด ์ ์ญ์์ ๋ชจ๋ฌ์ฐฝ์ ์ฌ์ฉํ  ์ ์๊ฒ ํ์ต๋๋ค.
alertModal|
-|
![alert](https://user-images.githubusercontent.com/102936206/199161609-53b66f1d-4443-43bc-875e-4b837663292d.gif)

```jsx
// AlertModalProvider.jsx
const AlertModalContext = createContext();

const AlertModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const show = (message) => {
    setMessage(message);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2950);
  };
  return (
    <AlertModalContext.Provider value={{ show }}>
      {isOpen && <AlertModal message={message} />}
      {children}
    </AlertModalContext.Provider>
  );
};
```

```javascript
// Auth.jsx
    ...
    const submitAuthInfo = () => { //์ด๋ฉ์ผ, ๋น๋ฐ๋ฒํธ ์ ์ก ํจ์
        const handler = loginMode ? trySignIn : trySignUp;
        handler([authInfo], {
        onSuccess: (data) => {
            setAccessToken(data);
            navigate("/todo");
        },
        onError: (msg) => alertModal.show(msg), // ์๋ ๋ชจ๋ฌ ๋ฉ์์ง ์ ๋ฌ
        });
    };
    ...
```

### 2-2. ๋ฒํผ ๋นํ์ฑํ

| ๊ธฐ์กด: ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ํต๊ณผํ์ง ๋ชปํ๋ฉด return; ์ผ๋ก api ์์ฒญ ์ ์ดํ์ต๋๋ค.
<br/>
| ๋ณ๊ฒฝ: ๋ฒํผ disabled ์์ฑ์ ์ ํจ์ฑ ๊ฒ์ฌ๊ฒฐ๊ณผ๋ฅผ ํ ๋นํด ๊ฒ์ฌ๋ฅผ ํต๊ณผํ ๊ฒฝ์ฐ(true)์ disabled=false๊ฐ ๋๋๋ก ํ์ต๋๋ค.

### 3. ์ํ๊ด๋ฆฌ

| ๊ธฐ์กด: todoList, setTodoList๋ฅผ ์์ ์ปดํฌ๋ํธ์๊ฒ props๋ก ์ ๋ฌํ๊ธฐ ๋๋ฌธ์ props drilling์ด ๋ฐ์ํ์ต๋๋ค.
<br/>
| ๋ณ๊ฒฝ: Context API๋ก todoContext๋ฅผ ์์ฑํด todoList๋ฅผ ์ ์ญ์ํ๋ก ๊ด๋ฆฌํด props drilling ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ์ต๋๋ค.

```jsx
// TodoListContextProvider.jsx
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
```

### 4. ์๋ฒ ํต์ 

| ๊ธฐ์กด: ์ปดํฌ๋ํธ๋ง๋ค axios๋ฅผ importํ๊ธฐ ๋๋ฌธ์, ํ ํฐ์ด ํ์ํ ๊ฒฝ์ฐ ํค๋ํ๋์ ์ผ์ผ์ด Authorization ์ต์์ ์ถ๊ฐํ์ต๋๋ค.
<br/>
| ๋ณ๊ฒฝ: axiosInstance.js์์ axios ์ธ์คํด์ค ์์ฑ ๋ฐ ์ธํฐ์ํฐ๋ฅผ ์ ์ฉํด ์ธ์ฆ์ ๋ณด ์ ๋ฌด์ ๋ฐ๋ผ api ์์ฒญ์ ์ฒ๋ฆฌํ ๋ก ํ์ต๋๋ค.

- ๊ณตํต๋ถ๋ถ์ ์ธํฐ์ํฐ๊ฐ ์ฒ๋ฆฌํด์ฃผ๊ธฐ ๋๋ฌธ์ ์ ์ง๋ณด์์ ์ข์ต๋๋ค.

```js
// api/axiosInstance.js
import axios from 'axios';
const PROXY = window.location.hostname === 'localhost' ? process.env.REACT_APP_SERVER : '/proxy';
const DEFAULT_CONFIG = {
  baseURL: PROXY,
  headers: { 'Content-Type': 'application/json' },
};

export const axiosInstance = axios.create(DEFAULT_CONFIG);
export const authAxiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  (config) => config,
  () => ({ message: '๋ฐํ์ ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค.' })
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

authAxiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('access_token')) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`;
    }
    return config;
  },
  () => ({ message: '๋ฐํ์ ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค.' })
);

authAxiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);
```

### 5. ํ ํฐ ์ ๋ฌด์ ๋ฐ๋ฅธ ๋ฆฌ๋ค์ด๋ ํธ('/', '/todo') ์ฒ๋ฆฌ

| ๊ธฐ์กด: useEffect ์ข์์ฑ ๋ฐฐ์ด์ ๋ก์ปฌ์คํ ๋ฆฌ์ง์์ ๋ถ๋ฌ์จ token์ ๋ฃ์ด ํ ํฐ์ ๋ฌด์ ๋ฐ๋ผ ๋ฆฌ๋ค์ด๋ ํธ ์์ผฐ์ต๋๋ค.

- ์ด๋ฏธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ ํ์ ํ ํฐํ์ธํ ํ์ด์ง ์ด๋์ด ์ด๋ค์ก์ต๋๋ค.
  <br/>

| ๋ณ๊ฒฝ: Route์์ Redirect ์ฒ๋ฆฌ๋ฅผ ํฉ๋๋ค. ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋๊ธฐ ์ ์ ์ฒ๋ฆฌ๋๋ฏ๋ก ๋ถํ์ํ ์ฐ์ฐ์ ์ค์๋๋ค.

```jsx
// AuthRoute.jsx
function AuthRoute({ element, destination, reversed }) {
  const accessToken = localStorage.getItem('access_token');
  const isAuthorized = reversed ? !accessToken : accessToken;
  return isAuthorized ? element : <Navigate to={destination} />;
}
```

```jsx
// App.jsx
function App() {
  return (
    ...
        <Routes>
          <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
          <Route path="/todo" element={<AuthRoute element={<ToDo />} destination="/" />} />
        </Routes>
    ...
  );
}
```

### 6. ์ต์ ํ

| ๊ธฐ์กด: todoItem ์ถ๊ฐ, ์์ , ์ญ์ ์ todoList์ ๋ชจ๋  todoItem์ด ๋ฆฌ๋ ๋๋ง ๋์ต๋๋ค.

| ๋ณ๊ฒฝ: TodoItem์ React.memo๋ฅผ ์ ์ฉ, todoList์ ๋ณํ๋ฅผ ์ฃผ๋ ํจ์๋ค์ useCallback์ ์ ์ฉ, todoDispatch ๊ฐ์ฒด์ useMemo๋ฅผ ์ ์ฉํด ๋ณ๊ฒฝ์ด ๊ฐํด์ง todoItem๋ง ๋ฆฌ๋ ๋๋ง๋๋๋ก ์ฒ๋ฆฌํ์ต๋๋ค.
๋ํ, todo๋ฅผ ์ถ๊ฐ, ์์ , ์ญ์ ํ๋ context์ todoList๋ฅผ ๋ถ๋ฆฌํด ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง์ ๋ฐฉ์งํ์ต๋๋ค.

```jsx
// context/todoListContext.jsx
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
```

```jsx
// components/Todo/TodoItem.jsx
export default React.memo(TodoItem);
```

## ๐ ํ๋ก์ ํธ ์คํ๋ฐฉ๋ฒ

```
yarn install
yarn start

```
