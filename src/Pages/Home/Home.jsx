import React from 'react';
import Banner from './Banner';
import TopJobs from './TopJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[90%] mx-auto my-11'>
                <div className='mb-11'>
                    <h1 className='lg:text-6xl font-extrabold text-center text-[#05264e]'>Jobs of the day</h1>
                    <p className='lg:text-lg text-gray-500 text-center'>Search and connect with the right candidates faster.</p>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    <TopJobs></TopJobs>
                    <TopJobs></TopJobs>
                    <TopJobs></TopJobs>
                    <TopJobs></TopJobs>
                </div>
            </div>
        </div>
    );
};

export default Home;