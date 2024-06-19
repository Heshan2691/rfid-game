import "./App.css";
import { Routes, Route } from "react-router-dom";
import Countdown from "./components/Countdown";

import Start from "./components/start";
import Round1 from "./components/Round1";
import Round2 from "./components/round2";
import Tryagain from "./components/tryagain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/round1" element={<Round1 />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/round2" element={<Round2 />} />
        <Route path="/tryagain" element={<Tryagain />} />
      </Routes>
    </div>
  );
}

export default App;
