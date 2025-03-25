import JobThumb from '../../assets/job_details_thumb.png';
import { useLoaderData } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5"

const JobDetails = () => {
    const singleJob = useLoaderData();
    return (
        <div className='w-[90%] mx-auto'>
            <div>
                <img src={JobThumb} className='rounded-2xl my-12' alt="Job_Details_Thumbnail" />
            </div>
            {/* Job Title and Apply Button */}
            <div>
                <div>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>{singleJob.title}</h1>
                    <div className='flex gap-4'>
                        <p className='text-xs flex items-center gap-0.5'><BsBagCheck /> {singleJob.jobType}</p>
                        <p className='text-xs flex items-center gap-0.2'><IoLocationOutline /> {singleJob.jobType}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;