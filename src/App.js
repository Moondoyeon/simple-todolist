/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import ToDo from "./pages/ToDo";
import AuthRoute from "./routes/AuthRoute";
import { AlertModalProvider } from "./context/alertModalContext";

function App() {
  return (
    <div className="App">
      <AlertModalProvider>
        <Routes>
          <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
          <Route path="/todo" element={<AuthRoute element={<ToDo />} destination="/" />} />
        </Routes>
      </AlertModalProvider>
    </div>
  );
}

export default App;
