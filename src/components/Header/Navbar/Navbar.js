import React, { useState } from 'react';
import userImg from '../../../img/user.png';
import logo from '../../../img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import classes from './navbar.css';
import useContextApi from '../../AuthContext/useContextApi';
const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const { user, signOutGoogle } = useContextApi();
    const handleSignOut = () => {
        signOutGoogle();
    }
    return (
        <>
            <nav className='flex justify-between items-center px-4'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className={hamburger ? 'nav-items' : "nav-items-mobile"} onClick={() => setHamburger(false)}>
                    <NavLink ClassName={(navInfo) => navInfo.isActive ? classes.active : ""
                    } className='p-4' to='/home'>Home</NavLink>
                    <NavLink ClassName={(navInfo) => navInfo.isActive ? classes.active : ""
                    } className='p-4' to='/about'>About</NavLink>
                    <NavLink ClassName={(navInfo) => navInfo.isActive ? classes.active : ""
                    } className='p-4' to='/service'>Service</NavLink>
                    <NavLink ClassName={(navInfo) => navInfo.isActive ? classes.active : ""
                    } className='p-4' to='/doctor'>Doctor</NavLink>
                    <NavLink ClassName={(navInfo) => navInfo.isActive ? classes.active : ""
                    } className='p-4' to='/contact'>Contact</NavLink>
                    {
                        user.email ? <Link className='p-4' to='/'><button onClick={handleSignOut} className='bg-primary login px-4 py-1 rounded'>Logout</button></Link> :
                            <Link className='p-4' to='/login'><button className='bg-primary login px-4 py-1 rounded'>Login</button></Link>
                    }
                </div>

                <div className="user flex items-center">
                    {
                        user ? <img src={user.photoURL} alt="" className='rounded-full' width='35px' height='35px' /> : <img src={userImg} alt="" className='rounded-full' width='35px' height='35px' />
                    }
                    <span className='p-1'>{user ? user.displayName : " "}</span>
                </div>

                <div className="hamburger">
                    <button onClick={() => setHamburger(!hamburger)}>
                        {hamburger ? (<i className="fas fa-times text-secondary text-2xl cursor-pointer"></i>) : (<i className="fas fa-bars text-secondary text-2xl cursor-pointer"></i>)}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;