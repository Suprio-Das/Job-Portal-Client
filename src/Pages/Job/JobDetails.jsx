import JobThumb from '../../assets/job_details_thumb.png';
import { useLoaderData } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5"
import { GoVerified } from "react-icons/go";
import { CiCircleList } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

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
            {/* Job Details */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {/* Job Details Left Layout */}
                <div className='col-span-2'>
                    {/* Employment Information */}
                    <div className='border-1 p-5 border-gray-300'>
                        <h1 className='text-[#05264e] text-2xl font-semibold'>Employment Information</h1>
                        <div className='divider -mt-0.1'></div>
                        <div>
                            {/* Job Key Info */}
                            <div className='grid lg:grid-cols-2 gap-6'>
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><CiCircleList /> Category</p>
                                    </div>
                                    <div>
                                        <p>{singleJob.category}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><MdOutlineAttachMoney /> Salary</p>
                                    </div>
                                    <div>
                                        <p>{singleJob.salaryRange.min}-{singleJob.salaryRange.max} {singleJob.salaryRange.currency}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><FaLaptopCode /> Job Type</p>
                                    </div>
                                    <div>
                                        <p>{singleJob.jobType}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><CiCalendarDate /> Deadline</p>
                                    </div>
                                    <div>
                                        <p>{singleJob.applicationDeadline}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><IoLocationOutline /> Location</p>
                                    </div>
                                    <div>
                                        <p>{singleJob.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Sidebar Information */}
                <div className='col-span-1 border-2'>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;