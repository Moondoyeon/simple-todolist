## 😃 Intro

심플심플 투두리스트 입니다.
<a href="https://simple-simple-todolist.netlify.app/">배포링크 바로가기</a>

### 테스트 계정

<div>id: test774@naver.com</div>
pw: test774!

<br/>

## 🎬 리팩토링 데모

| 회원가입                                                                                                          | 로그인                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![signup](https://user-images.githubusercontent.com/102936206/199159308-72241357-7923-41ea-a480-5ef018e07368.gif) | ![login](https://user-images.githubusercontent.com/102936206/199159824-dcfbe09f-032c-4b8e-8fc8-5301a4b8045d.gif)  |
| 할일 추가,조회                                                                                                    | 할일 수정,삭제                                                                                                    |
| ![todoCR](https://user-images.githubusercontent.com/102936206/199160116-a782756d-c909-4098-a0a5-25f48f8a86bf.gif) | ![todoUD](https://user-images.githubusercontent.com/102936206/199160529-82f73f8f-3873-43c9-9678-71e95498f503.gif) |

## 🎬 리팩토링 전 데모

| 1.회원가입 & 로그인                                                                                                 | 2.할일 추가, 조회                                                                                                 | 3.할일 수정, 삭제                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![signupIn](https://user-images.githubusercontent.com/102936206/196187399-35908940-e83c-4121-97f2-1917b3ec5aeb.gif) | ![todoCR](https://user-images.githubusercontent.com/102936206/196187484-15f181a5-c44f-4bd3-b450-896318ff6cfc.gif) | ![todoUD](https://user-images.githubusercontent.com/102936206/196187536-b84de763-8eca-422f-8752-7778569233ea.gif) |

## 🛠 리팩토링 방향

1. 폴더구조
2. UI/UX
3. 상태관리
4. 서버 통신
5. 토큰 유무에 따른 리다이렉트 처리
6. 최적화

### 1. 폴더 구조

pages, routes, constants, context 등 컴포넌트 역할에 맞게 폴더구조를 변경했습니다.

```
.
├── App.jsx
├── api
│   ├── apis.js
│   └── axiosInstance.js
├── components
│   ├── Todo
│   │   ├── TodoEditor
│   │   │   ├── TodoEditor.jsx
│   │   │   └── style.js
│   │   ├── TodoItem
│   │   │   ├── TodoItem.jsx
│   │   │   └── style.js
│   │   └── TodoList
│   │       └── TodoList.jsx
│   └── UI
│       ├── AlertModal
│       │   └── AlertModal.jsx
│       ├── button
│       │   └── DefaultButton.jsx
│       └── input
│           └── DefaultInput.jsx
├── constants
│   ├── index.js
│   ├── messages.js
│   └── regexp.js
├── context
│   ├── alertModalContext.jsx
│   └── todoListContext.jsx
├── hooks
│   ├── useAxios.js
│   └── useInput.js
├── index.jsx
├── pages
│   ├── Auth
│   │   ├── index.jsx
│   │   └── style.jsx
│   └── Todo
│       └── index.jsx
├── routes
│   └── AuthRoute.jsx
├── styles
│   ├── GlobalStyle.js
│   ├── mixins.js
│   └── theme.js
└── utils
    └── IsValidInfo.js
```

### 2. UI/UX

### 2-1. 알림모달

| 기존: 자바스크립트에서 기본으로 제공하는 알림창을 사용했습니다.
<br/>

- 알림창이 띄어져 있는 동안 스크립트가 일시 정지되어 동작에 제한을 받고, 스타일링이 불가능하다는 단점이 있습니다.
  <br/>

| 변경: AlertModalContext를 생성, 알림모달을 만들어 전역에서 모달창을 사용할 수 있게 했습니다.
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
    const submitAuthInfo = () => { //이메일, 비밀번호 전송 함수
        const handler = loginMode ? trySignIn : trySignUp;
        handler([authInfo], {
        onSuccess: (data) => {
            setAccessToken(data);
            navigate("/todo");
        },
        onError: (msg) => alertModal.show(msg), // 알람 모달 메시지 전달
        });
    };
    ...
```

### 2-2. 버튼 비활성화

| 기존: 유효성 검사를 통과하지 못하면 return; 으로 api 요청 제어했습니다.
<br/>
| 변경: 버튼 disabled 속성에 유효성 검사결과를 할당해 검사를 통과한 경우(true)에 disabled=false가 되도록 했습니다.

### 3. 상태관리

| 기존: todoList, setTodoList를 자식 컴포넌트에게 props로 전달했기 때문에 props drilling이 발생했습니다.
<br/>
| 변경: Context API로 todoContext를 생성해 todoList를 전역상태로 관리해 props drilling 문제를 해결했습니다.

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

### 4. 서버 통신

| 기존: 컴포넌트마다 axios를 import했기 때문에, 토큰이 필요한 경우 헤더필드에 일일이 Authorization 옵션을 추가했습니다.
<br/>
| 변경: axiosInstance.js에서 axios 인스턴스 생성 및 인터셉터를 적용해 인증정보 유무에 따라 api 요청을 처리토록 했습니다.

- 공통부분을 인터셉터가 처리해주기 때문에 유지보수에 좋습니다.

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
  () => ({ message: '런타임 에러가 발생했습니다.' })
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
  () => ({ message: '런타임 에러가 발생했습니다.' })
);

authAxiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);
```

### 5. 토큰 유무에 따른 리다이렉트('/', '/todo') 처리

| 기존: useEffect 종속성 배열에 로컬스토리지에서 불러온 token을 넣어 토큰유무에 따라 리다이렉트 시켰습니다.

- 이미 컴포넌트가 렌더된 후에 토큰확인후 페이지 이동이 이뤄졌습니다.
  <br/>

| 변경: Route에서 Redirect 처리를 합니다. 컴포넌트가 렌더되기 전에 처리되므로 불필요한 연산을 줄입니다.

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

### 6. 최적화

| 기존: todoItem 추가, 수정, 삭제시 todoList의 모든 todoItem이 리렌더링 됐습니다.

| 변경: TodoItem을 React.memo를 적용, todoList에 변화를 주는 함수들에 useCallback을 적용, todoDispatch 객체에 useMemo를 적용해 변경이 가해진 todoItem만 리렌더링되도록 처리했습니다.
또한, todo를 추가, 수정, 삭제하는 context와 todoList를 분리해 불필요한 리렌더링을 방지했습니다.

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

## 📚 프로젝트 실행방법

```
yarn install
yarn start

```
