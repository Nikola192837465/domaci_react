import "./App.css";
import { KontaktiAplikacija } from "./components/layout/stranice/KontaktiAplikacija";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<KontaktiAplikacija />} />
        <Route />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
