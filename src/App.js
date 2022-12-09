import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContainerGrid from "./components/layout/ContaineGrid";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      {/**  Navbar  */}
      <Navbar />

      <ContainerGrid styles={"bgDarkContainer"}>
        {/**  Routes Config */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<div>Path '/projects'</div>} />
        </Routes>
      </ContainerGrid>

      {/**  Footer  */}
      <Footer />
    </Router>
  );
}
