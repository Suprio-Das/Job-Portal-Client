import Lottie from 'lottie-react';
import LoginLottie from '../../assets/Lottie/Login.json';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { signInUserWithEmail } = useContext(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value

        // Sign in user
        signInUserWithEmail(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Sign in successfully', {
                        position: "top-center",
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
                    toast.error('Invalid Password or Email', {
                        position: "top-center",
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
    return (
        <div className='w-[80%] mx-auto my-5'>
            <ToastContainer></ToastContainer>
            <p className='text-[#3C65F5] text-center'>Welcome Back!</p>
            <h1 className='text-[#05264E] text-5xl text-center font-semibold'>Member Login</h1>
            <div className='flex justify-center items-center mt-11'>
                <div className='w-1/2 flex items-center justify-center'>
                    <Lottie className='w-72' animationData={LoginLottie}></Lottie>
                </div>
                <div className='w-1/2'>
                    <form onSubmit={handleSignIn}>
                        <SocialLogin></SocialLogin>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email *</legend>
                            <input type="text" className="input" name='email' required placeholder="Enter your email" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password *</legend>
                            <input type="password" className="input" name='password' required placeholder="Enter your password" />
                        </fieldset>
                        {/* <p className='text-red-600'>{error}</p> */}
                        <input type="submit" className='btn bg-[#05264E] text-white w-xs mt-4' value="Login & Explore" />
                        <p className='text-[14px] text-gray-500'>Don't have an account? <Link className='text-[#05264E]' to='/register'>Sign up</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;