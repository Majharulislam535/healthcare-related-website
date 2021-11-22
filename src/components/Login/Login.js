import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useContextApi from '../AuthContext/useContextApi';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    const { googleSignIn, error, setError, signInEmail } = useContextApi();
    const handleSignIn = () => {
        googleSignIn()
            .then(result => {

                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMeg = error.message;
                setError(errorMeg);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInEmail(email, password)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    return (
        <>
            <div>
                <div className="about-title text-center md:py-15 sm:py-10  lg:py-20">
                    <h1 className='text-secondary font-bold text-6xl'>Login</h1>
                    <p className='text-xl font-bold text-secondary py-4'> <Link to='/home' className='hover:text-primary'>Home</Link>/Login</p>
                </div>
                <div className="registration-form lg:w-1/3 rounded-lg md:w-2/3 sm:w-9/12 w-10/12 py-10 mx-auto border-black border-2">
                    <h1 className='text-center lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold text-secondary'>Login Form</h1>
                    <div className='p-4 '>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="" className='text-2xl text-secondary'>E-mail: </label><br />
                            <input type="text" onBlur={handleEmail} required className='px-4 py-2 my-2 w-full border-secondary  border-2 rounded-2xl
                    focus:outline-none' placeholder='Your E-mail address' />
                            <br />
                            <label htmlFor="" className='text-2xl text-secondary'>Password: </label> <br />
                            <input type="password" required onBlur={handlePassword} className='px-4 py-2 my-2 w-full border-secondary  border-2 rounded-2xl
                    focus:outline-none' placeholder='Password' />
                            <br />
                            <button type="submit" className='bg-primary flex mx-auto login font-bold text-xl py-2 px-6 rounded-2xl my-2'>Login</button>
                        </form>

                        <p className='text-xl text-center text-tomato'>Or</p>
                        <button onClick={handleSignIn} className='bg-secondary mx-4 flex mx-auto login font-bold text-xl py-2 px-4 rounded-2xl my-2 '> Google</button>
                        <br />
                        <div className='text-center'>
                            <Link to="/registration" className=' text-lg font-bold underline  text-tomato '>new user</Link>
                        </div>
                        <p>{error}</p>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Login;