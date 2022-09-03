import React from "react";
import './Header.css'
import Riddle from '../../Images/riddle.svg'
export default function Header(){
    return(
        <>
        <div className="header">
          <img src={Riddle} alt="riddle-logo" />
        </div>
        </>
    )
}