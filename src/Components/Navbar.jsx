import React from "react";
import { CiAlarmOff } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  let arr = [
    { name: "edit", icon: <CiAlarmOff /> },
    { name: "Courier info", icon: <CiAlarmOff /> },
    { name: "Share", icon: <CiAlarmOff /> },
    { name: "Remove", icon: <CiAlarmOff /> },
  ];
  return (
    <div>
     {
      arr.map(elem=>{
        return  <div className="child">
        <p>{elem.name}</p>
        {elem.icon}
      </div>
      })
     }
    </div>
  );
};

export default Navbar;
