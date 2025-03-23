import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from '../../assets/Lottie/registration.json';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin';
const Register = () => {
    const { createUserWithEmail } = useContext(AuthContext);
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
            setError('Password must like this: SuprioDas31#');
        }
        else {
            createUserWithEmail(email, password)
                .then(result => {
                    setError('');
                    if (result.user) {
                        toast.success('Account created successfully', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                })
                .catch(error => {
                    if (error.message) {
                        toast.error(`${error.message}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                })
        }
    }
    return (
        <div className='w-[80%] mx-auto my-5'>
            <ToastContainer></ToastContainer>
            <p className='text-[#3C65F5] text-center'>Register</p>
            <h1 className='text-[#05264E] text-5xl text-center font-semibold'>Start for free Today</h1>
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className='w-1/2'>
                    <form onSubmit={handleRegister}>
                        <SocialLogin></SocialLogin>
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
                        <p className='text-red-600'>{error}</p>
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