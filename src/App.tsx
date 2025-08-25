import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Home";
import PresentationRoom from "./components/Presentation/RoomOnFire";
import AppMinimal from "./AppMinimal";

function App() {
  return (
    <Routes>
      <Route path="/kianmehr-portfolio/" element={<Home />} />
      <Route
        path="/kianmehr-portfolio/presentation-room"
        element={<PresentationRoom />}
      />
      <Route
        path="/kianmehr-portfolio/friendly-version"
        element={<AppMinimal />}
      />
    </Routes>
  );
}

export default App;
