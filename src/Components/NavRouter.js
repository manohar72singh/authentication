import React from 'react'
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
export default function NavRouter()
{
    //const token = window.localStorage.getItem("token");
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/user_registration' element={<Signup/>} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </>
    )
}