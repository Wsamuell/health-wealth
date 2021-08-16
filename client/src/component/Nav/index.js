import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../Nav/style.css';

function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div className="nav-bar">
                <Link to="/" className='mini-logo'>
                    <img src={require('../../assets/img/banner-logo.jpg').default} alt="Health Wealth" className='health-logo'/>
                </Link>

                <nav className="nav-menu">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile" className='btn btn-info btn-lg'> My Profile </Link>
                            <a href="/" className='btn btn-danger btn-lg' onClick={logout}> Logout </a>
                            {/* <Link to="/shop" className='btn btn-info btn-lg'> Shop </Link> */}

                        </>
                    ) : (
                        <>
                            <Link to="/login" className='btn btn-info btn-lg login-spc'>Login</Link>
                            <Link to="/signup" className='btn btn-success btn-lg'>Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Nav;