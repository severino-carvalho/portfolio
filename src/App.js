import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <Router>
      {/**  Navbar  */}
      <Navbar />

      {/**  Routes Config */}
      <Routes>
        <Route path='/' element={
          <div>Path '/'</div>
        } />

        <Route path='/projects' element={
          <div>
            Path '/projects'
          </div>
        } />
      </Routes>
    </Router>
  );
}
