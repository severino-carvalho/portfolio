import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContainerGrid from "./components/layout/ContaineGrid";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      <ContainerGrid styles={"bgDarkContainer"}>
        {/**  Routes Config */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContainerGrid>

      {/**  Footer  */}
      <Footer />
    </Router>
  );
}
