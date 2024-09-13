import "./App.css";
import { KontaktiAplikacija } from "./components/layout/stranice/KontaktiAplikacija";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Paginacija } from "./components/layout/stranice/Paginacija";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<KontaktiAplikacija />} />
        <Route path="/paginacija" element={<Paginacija />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
