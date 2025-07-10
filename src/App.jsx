import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";

import Navbar from "./components/nav";

function App() {
  return (
    <div className="App">
      {/* //? navbar */}
      <Navbar></Navbar>
      {/* //? main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
