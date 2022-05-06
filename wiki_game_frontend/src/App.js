import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarPage from './pages/NavbarPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<NavbarPage />} >
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
