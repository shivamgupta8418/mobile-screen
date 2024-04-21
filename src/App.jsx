import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import BuySell from "./Components/BuySell";
import DownNavbar from "./Components/DownNavbar";
import Navbar from "./Components/Navbar";
import TimeLine from "./Components/TimeLine";
import Rate from "./Components/Rate";
import { Graph } from "./Components/Graph";

function App() {
  return <div className="Parent">
    {/* <Banner />
    <BuySell />
  <DownNavbar /> */}
  {/* <Navbar /> */}
  {/* <TimeLine /> */}
  {/* <Rate /> */}
<Graph />
  </div>;
}

export default App;
