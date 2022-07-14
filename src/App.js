import { Nav } from "./Components/Nav";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { Track } from "./Pages/Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Visualize } from "./Pages/Visualize";
import { Feedback } from "./Pages/Feedback";
import { useState } from "react";
import { dumData } from "./tempData/DumData";
function App() {
    const [language,setLanguage] = useState("En");
    const [workoutsData, setWorkoutsData] = useState(dumData);
    return (
        <Router>
            <Nav language={language} setLanguage={setLanguage}/>
            <Routes>
                <Route path="/Tracko/" element={<HomePage language={language}/>} />
                <Route path="/Tracko/track" element={<Track language={language} workoutsData={workoutsData} setWorkoutsData={setWorkoutsData}/>} />
                <Route path="/Tracko/Visualize" element={<Visualize language={language} workoutsData={workoutsData}/>}/>
                <Route path="/Tracko/Feedback" element={<Feedback language={language}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
