import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">HeroLogo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                !user.email &&
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link"
                                            to="/login"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "#636"
                                            }}>
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link"
                                            to="/register"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "#636"
                                            }}>
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            }
                            {
                                user.email ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                to="/shopping"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                Shopping
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink onClick={logOut} className="nav-link"
                                                to="/"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                LogOut
                                            </NavLink>
                                        </li>
                                    </> : ''
                            }
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;