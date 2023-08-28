
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#">Google Keep</a>

                    <ul className="navbar-nav me-auto d-flex flex-row ">
                        <li className="nav-item mx-4">
                            <NavLink to='/' className='text-decoration-none text-white'> Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='text-decoration-none text-white'> About </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;