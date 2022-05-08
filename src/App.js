import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      {/**  Navbar  */}

      {/**  Routes Config */}
      <Routes>
        <Route path='/' element={<div>Path '/'</div>} />
      </Routes>
    </Router>
  );
}
