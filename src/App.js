import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

const App=()=>{
    return(
        <div>
            <Navbar/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default App;