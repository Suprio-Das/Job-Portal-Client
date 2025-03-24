import React from 'react';
import Banner from './Banner';
import TopJobs from './TopJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[90%] mx-auto grid grid-cols-4 gap-5'>
                <TopJobs></TopJobs>
                <TopJobs></TopJobs>
                <TopJobs></TopJobs>
                <TopJobs></TopJobs>
            </div>
        </div>
    );
};

export default Home;