// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CategoryPick from "./pages/CategoryPick";
import HowToPlay from "./pages/HowToPlay";
import Ingame from "./pages/Ingame";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />}></Route>
      <Route path="/category" element={<CategoryPick />}></Route>
      <Route path="/howtoplay" element={<HowToPlay />}></Route>
      <Route path="/ingame/:category" element={<Ingame />}></Route>
    </Routes>
  );
}

export default App;
