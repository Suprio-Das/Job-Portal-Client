import Lottie from 'lottie-react';
import LoaderLottie from '../../assets/Lottie/loader.json'

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-120px)]'>
            <Lottie animationData={LoaderLottie} className='w-62'></Lottie>
        </div>
    );
};

export default Loader;