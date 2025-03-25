import JobThumb from '../../assets/job_details_thumb.png';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJob = useLoaderData();
    return (
        <div className='w-[90%] mx-auto'>
            <div>
                <img src={JobThumb} className='rounded-2xl my-12' alt="Job_Details_Thumbnail" />
            </div>
        </div>
    );
};

export default JobDetails;