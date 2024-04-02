import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import './index.css'
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";


function App() {

  return (
    <>
      <h1>Color Router:</h1>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red:</Link>
          <Link to="/blue">Blue:</Link>
          <Link to="/home">Home:</Link>

        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>} />
            <Route path="/home" element={<Home/>}/>
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App
