import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    return (
        <div className="w-xs">
            <button className="flex items-center btn btn-base w-full">
                <FcGoogle className="text-lg" /> Sign in with Google
            </button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;