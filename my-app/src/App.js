
import './index.css';

import Nav from './Components/Nav-bar/navbar';
import HSS from './Components/AboutHSS/hss';
import Home from './Components/Home/home';
import WeeklyReflections from './Components/Reflections/reflections';
/*
import About from './Components/About/about';
import Evidence from './Components/Evidence/evidence';
import Reflections from './Components/Reflections/reflections';
import Journal from './Components/Journal/journal';
*/
function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <HSS/>
            <WeeklyReflections />

        </div>
    );
};
export default App;