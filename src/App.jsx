import { Routes, Route } from "react-router-dom";

import ToDo from "./pages/ToDo";
import Auth from "./pages/Auth";
import AuthRoute from "./routes/AuthRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
        <Route path="/todo" element={<AuthRoute element={<ToDo />} destination="/" />} />
      </Routes>
    </div>
  );
}

export default App;
