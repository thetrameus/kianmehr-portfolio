import { Route, Routes } from "react-router";
import AppMinimal from "./AppMinimal";

function App() {
  return (
    <Routes>
      <Route path="/kianmehr-portfolio/" element={<AppMinimal />} />
    </Routes>
  );
}

export default App;
