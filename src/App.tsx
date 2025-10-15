// import "./App.css";
import { Route, Routes } from "react-router";
// import PresentationRoom from "./assets/Presentation/RoomOnFire";
import AppMinimal from "./AppMinimal";
import Test from "./components/NewVersion/Test";

function App() {
    return (
        <Routes>
            <Route path="/kianmehr-portfolio/" element={<AppMinimal />} />
            {/* <Route
                path="/kianmehr-portfolio/presentation-room"
                element={<PresentationRoom />}
            /> */}
            {/* <Route
                path="/kianmehr-portfolio/friendly-version"
                element={<AppMinimal />}
            /> */}
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}

export default App;
