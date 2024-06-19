import "./App.css";
import { Routes, Route } from "react-router-dom";
import Countdown from "./components/Countdown";

import Start from "./components/start";
import Round1 from "./components/Round1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/round1" element={<Round1 />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </div>
  );
}

export default App;
