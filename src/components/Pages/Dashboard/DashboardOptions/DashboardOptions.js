import React from 'react'
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth';

const DashboardOptions = () => {
    const { logout, admin } = useAuth()
    const { url } = useRouteMatch();
    const history = useHistory()

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container text-white">
                <a className="navbar-brand" href="#">CYCLOBE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-primary" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CYCLOBE</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>
                            {
                                admin ? (
                                    <>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink to={`${url}`} activeClassName={'active'} className="nav-link">Make Admin</NavLink>
                                        </li>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}/manage-orders`}>Manage Orders</NavLink>
                                        </li>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}/add-product`}>Add Product</NavLink>
                                        </li>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}/manage-products`}>Manage Product</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}`}>Pay</NavLink>
                                        </li>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}/my-orders`}>MY ORDERS</NavLink>
                                        </li>
                                        <li className="nav-item"  data-bs-dismiss="offcanvas">
                                            <NavLink activeClassName={'active'} className="nav-link" to={`${url}/review`}>Review</NavLink>
                                        </li>
                                    </>
                                )
                            }
                            <li className="nav-item"  data-bs-dismiss="offcanvas">
                                <a style={{cursor:'pointer'}} className="nav-link" onClick={logout}>LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DashboardOptions
