import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    // Signout user
    const logout = () => {
        signOutUser()
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/myApplications'>My Applications</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar mx-auto w-[90%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-100 p-2 rounded-box shadow w-52 menu menu-sm mt-3 z-1">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Job-Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={logout} className='btn'>Log out</button>
                            </>
                            :
                            <>
                                <Link to='/register'>
                                    <p className='mr-2'>Register</p>
                                </Link>
                                <Link to='/login'>
                                    <button className='btn'>Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;