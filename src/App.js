import { Nav } from "./Components/Nav";
import { HomePage } from "./Pages/HomePage";
import {Route, Switch } from "react-router-dom";
import "./index.css";
import { Track } from "./Pages/Track";
function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route to="/" exact>
                    <HomePage />
                </Route>
                <Route to="/track">
                    <Track />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
