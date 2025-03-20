import Lottie from 'lottie-react';
import React from 'react';
import registerLottie from '../../assets/Lottie/registration.json';
const Register = () => {
    return (
        <div className='w-[80%] mx-auto my-5'>
            <p className='text-[#3C65F5] text-center'>Register</p>
            <h1 className='text-[#05264E] text-5xl text-center font-semibold'>Start for free Today</h1>
            <div>
                <div>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Register;