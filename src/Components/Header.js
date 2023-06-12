import React from 'react'
import { Link } from 'react-router-dom'

export default function Header()
{
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className='navbar-brand' to='/'> Logo </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto active">
                            <li className="nav-item  ">
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user_registration">Registraion</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
        
    )
}