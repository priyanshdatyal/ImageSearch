import React from 'react'
import "../../css/header.css"
import logo from "../../res/icons/logo.jpg"
import { Link } from 'react-router-dom';

export default function Header() {
    function changeTheme(){
        document.body.classList.toggle("dark");
    }

  return (
    <div className='header' id="header">
        <div className="leftPart">
            <div className="homelogo">
                <img src={logo}/>
            </div>
            <div className="headerText">
                Insane AI
            </div>
        </div>
        <div className="rightPart">
            <div className="menu">
                <ul>
                    <li>
                        <Link  to="/" className='linkText'>Home</Link>
                    </li>
                    <li>
                        <Link  to="/login" className='linkText'>Login</Link>
                    </li>
                    <li>
                        <Link  to="/signup" className='linkText'>SignUp</Link>
                    </li>
                    <li id="themeIcon" onClick={()=>{changeTheme()}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/557/557033.png"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
