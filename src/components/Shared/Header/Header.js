import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">CYCLOBE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName={'active'} className="nav-link" to='/'>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={'active'} className="nav-link" to='/products'>CYCLES</NavLink>
                        </li>
                        {
                            user.uid ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink activeClassName={'active'} className="nav-link" to='/dashboard'>DASHBOARD</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-outline-info" onClick={logout}>LOGOUT</button>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">{user.name}</a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink activeClassName={'active'} className="nav-link" to='/login'>LOGIN</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName={'active'} className="nav-link" to='/registration'>REGISTRATION</NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
