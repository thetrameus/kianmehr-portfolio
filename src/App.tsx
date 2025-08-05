import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Home";
import PresentationRoom from "./components/Presentation/RoomOnFire";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presentation-room" element={<PresentationRoom />} />
    </Routes>
  );
}

export default App;
