import './App.css';

// pages
import { HomePage } from './pages/HomePage.js';
import { GamePage } from './pages/GamePage.js';

// router
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/game/:gameId" element={ <GamePage /> } />
      </Routes>
    </div>
  );
}

export default App;
