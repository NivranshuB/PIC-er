import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPage from './pages/NavbarPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GameEndPage from './pages/GameEndPage';
import HelpPage from './pages/HelpPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<NavbarPage />} >
            <Route index element={<HomePage />} />
            <Route path='leaderboard' element={<LeaderboardPage />} />
            <Route path='help' element={<HelpPage />} />
            <Route path='game' element={<GamePage />} />
            <Route path='end' element={<GameEndPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
