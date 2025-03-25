import JobThumb from '../../assets/job_details_thumb.png';
import { useLoaderData } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5"
import { GoVerified } from "react-icons/go";

const JobDetails = () => {
    const singleJob = useLoaderData();
    return (
        <div className='w-[90%] mx-auto'>
            <div>
                <img src={JobThumb} className='rounded-2xl my-12' alt="Job_Details_Thumbnail" />
            </div>
            {/* Job Title and Apply Button */}
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>{singleJob.title}</h1>
                    <div className='flex gap-4'>
                        <p className='text-xs flex items-center gap-0.5'><BsBagCheck /> {singleJob.jobType}</p>
                        <p className='text-xs flex items-center gap-0.2'><IoLocationOutline /> {singleJob.jobType}</p>
                    </div>
                </div>
                <button className='btn bg-[#3c65f5] text-white'><GoVerified /> Apply now</button>
            </div>
            <div className='divider my-8'></div>
        </div>
    );
};

export default JobDetails;