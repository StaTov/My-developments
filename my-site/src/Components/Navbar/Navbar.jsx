import React from "react";
import style from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.navbar}>
           <ul>
               <li className={style.item}><a href="./">Profile</a></li>
               <li className={style.item}><a href="./message">Message</a></li>
               <li className={style.item}><a href="./friends">Friends</a></li>
               <li className={style.item}><a href="./music">Music</a></li>
               <li className={style.item}><a href="./settings">Settings</a></li>
           </ul>
        </div>

    )
}

export default Navbar;