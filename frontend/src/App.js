import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Game";
import History from "./History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;