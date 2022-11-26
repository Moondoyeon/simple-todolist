import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
        <Route path="/todo" element={<AuthRoute element={<Todo />} destination="/" />} />
      </Routes>
    </div>
  );
}

export default App;
