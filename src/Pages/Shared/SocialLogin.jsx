import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                if (result.user) {
                    toast.success('Login Successfull.');
                    navigate(from);
                }
            })
            .catch(error => {
                if (error.message) {
                    toast.error(error.message);
                }
            })
    }
    return (
        <div className="w-xs">
            <button className="flex items-center btn btn-base w-full" onClick={handleGoogleLogin}>
                <FcGoogle className="text-lg" /> Sign in with Google
            </button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;