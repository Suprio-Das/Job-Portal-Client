import Lottie from 'lottie-react';
import React, { useState } from 'react';
import registerLottie from '../../assets/Lottie/registration.json';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error, setError] = useState("");
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const newUser = { name, email, password, photo };

        // password validation using regex
        const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            setError('Password must have at least 6 characters, including one letter and one number');
        }
    }
    return (
        <div className='w-[80%] mx-auto my-5'>
            <p className='text-[#3C65F5] text-center'>Register</p>
            <h1 className='text-[#05264E] text-5xl text-center font-semibold'>Start for free Today</h1>
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className='w-1/2'>
                    <form onSubmit={handleRegister}>
                        <p>{error}</p>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Full Name *</legend>
                            <input type="text" className="input" name='name' required placeholder="Suprio Das" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email *</legend>
                            <input type="text" className="input" name='email' required placeholder="suprio.cse@gmail.com" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password *</legend>
                            <input type="password" className="input" name='password' required placeholder="Type a strong password" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Profile Photo URL *</legend>
                            <input type="text" className="input" name='photo' required placeholder="Enter photo URL" />
                        </fieldset>
                        <input type="submit" className='btn bg-[#05264E] text-white w-xs mt-4' value="Submit & Register" />
                        <p className='text-[14px] text-gray-500'>Already have an account? <Link className='text-[#05264E]' to='/login'>Sign in</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;