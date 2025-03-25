import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJob = useLoaderData();
    return (
        <div>
            {
                singleJob.title
            }
        </div>
    );
};

export default JobDetails;