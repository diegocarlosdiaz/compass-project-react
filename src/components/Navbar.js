import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types';

export const Navbar = () => {

    let navigate=useNavigate()

    const {user,dispatch} = useContext(AuthContext);
    const{name}=user

    const handleLogout = () => {

        dispatch({
            type: types.logout,
            payload:null
        })

        navigate('/login')

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Heroes App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/marvel">Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dc">Dc Comics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                        </li>



                    </ul>
                </div>
            </div>
            <li>
                <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
                    <ul className='navbar-nav ms-auto'>
                        <p className='nav-item nav-link text-info mb-0'>
                            {name}
                        </p>
                        <button className='nav-item nav-link border-0 bg-transparent' onClick={handleLogout}>
                            Logout

                        </button>

                    </ul>

                </div>
            </li>
        </nav>
    )
}
