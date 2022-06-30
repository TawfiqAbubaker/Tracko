import { Nav } from "./Components/Nav";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { Track } from "./Pages/Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Visualize } from "./Pages/Visualize";
import { Feedback } from "./Pages/Feedback";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/Tracko/" element={<HomePage/>} />
                <Route path="/Tracko/track" element={<Track />} />
                <Route path="/Tracko/Visualize" element={<Visualize/>}/>
                <Route path="/Tracko/Feedback" element={<Feedback/>}/>
            </Routes>
        </Router>
    );
}

export default App;
