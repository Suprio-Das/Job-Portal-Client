import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import TopJobs from './TopJobs';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='w-[90%] mx-auto my-11'>
                <div className='mb-11'>
                    <h1 className='lg:text-6xl font-extrabold text-center text-[#05264e]'>Jobs of the day</h1>
                    <p className='lg:text-lg text-gray-500 text-center'>Search and connect with the right candidates faster.</p>
                </div>
                <div className='grid grid-cols-4 gap-y-10 gap-x-6'>
                    {
                        jobs.map(job => <TopJobs key={job._id} job={job}></TopJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;