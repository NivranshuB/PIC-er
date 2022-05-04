import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import GameComponent from "./GameComponent";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header">
              <h1>Wiki-Game backend testing</h1>
            </header>
            <Outlet />
          </div>
        }
      >
        <Route index element={<Navigate to="game" replace />} />

        <Route path="game" element={<GameComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
