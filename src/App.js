import { Nav } from "./Components/Nav";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { Track } from "./Pages/Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/track" element={<Track />} />
            </Routes>
        </Router>
    );
}

export default App;
