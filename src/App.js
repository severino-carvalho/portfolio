import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      {/**  Navbar  */}
      <Navbar />

      <Container>
        {/**  Routes Config */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<div>Path '/projects'</div>} />
        </Routes>
      </Container>

      {/**  Footer  */}
      <Footer />
    </Router>
  );
}
