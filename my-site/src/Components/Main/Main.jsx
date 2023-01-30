import React from "react";
import style from "./Main.module.css"
import {Route, Routes} from "react-router-dom";
import Message from "../Message/Message";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";


const Main = () => {
    return (<div className={style.main}>
            <Routes>
                <Route path='/message' element={<Message/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    )
}


export default Main;