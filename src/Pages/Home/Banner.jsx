import BannerImageOne from '../../assets/home_banner_1.png'
const Banner = () => {
    return (
        <div className="bg-[#f2f6fd] min-h-[calc(100vh-70px)] p-11 flex items-center">
            <div className="w-[90%] mx-auto flex items-center gap-10">
                <div className='w-2/3'>
                    <h1 className="lg:text-7xl font-extrabold text-[#05264e]">The <span className='text-[#3c65f5]'>Easiest Way</span> <br /> to Get Your New Job</h1>
                    <p className='text-lg text-[#4F5E64] w-4/5 mt-6'>Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day</p>
                </div>
                <div className='1/3'>
                    <img src={BannerImageOne} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;