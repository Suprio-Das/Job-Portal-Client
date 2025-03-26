import JobThumb from '../../assets/job_details_thumb.png';
import { Link, useLoaderData } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5"
import { GoVerified } from "react-icons/go";
import { CiCircleList } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const JobDetails = () => {
    const singleJob = useLoaderData();
    const responsibilities = singleJob.responsibilities;
    const today = new Date().setHours(0, 0, 0, 0);
    const isJobExpired = new Date(singleJob.applicationDeadline).setHours(0, 0, 0, 0) < today;
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
                        <p className='text-xs flex items-center gap-0.2'><IoLocationOutline /> {singleJob.location}</p>
                    </div>
                </div>
                <button className={`btn bg-[#3c65f5] hover:bg-[#05264e] hover:-translate-y-0.5 transition text-white ${isJobExpired ? 'cursor-not-allowed' : ''}`} disabled={isJobExpired}><GoVerified /> Apply now</button>
            </div>
            <div className='divider my-8'></div>
            {/* Job Details */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {/* Job Details Left Layout */}
                <div className='col-span-2'>
                    {/* Employment Information */}
                    <div className='border-1 p-5 border-gray-300 rounded-xl'>
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
                                <div className='flex items-start gap-5'>
                                    <div>
                                        <p className='font-semibold flex items-center gap-0.5'><IoLocationOutline /> Status</p>
                                    </div>
                                    <div>
                                        <p>
                                            {
                                                singleJob.status === 'active'
                                                    ?
                                                    <span className='text-green-600'>Available</span>
                                                    :
                                                    <span className='text-red-600'>Not Available</span>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Job Description */}
                    <div className='mt-8'>
                        <h1 className='text-2xl'>Welcome to <span className='text-[#05264e] font-semibold'>{singleJob.company}</span> Team,</h1>
                        <p className='my-3'>
                            {singleJob.description}
                        </p>
                        <h1 className='text-2xl text-[#05264e] font-semibold mt-8'>Responsibilities</h1>
                        <ul className="space-y-2">
                            {responsibilities.map((res, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700 mt-3">
                                    <span className="text-[#3c65f5] text-lg">✔</span>
                                    <span>{res}</span>
                                </li>
                            ))}
                        </ul>
                        <h1 className='text-2xl text-[#05264e] font-semibold mt-8'>Requirements</h1>
                        {
                            singleJob.requirements.map((requirement, index) => (
                                <button key={index} className='btn mr-3 mt-2 hover:bg-[#05264e] hover:text-white transition'>{requirement}</button>
                            ))
                        }
                        <div className='mt-8'>
                            <button className={`btn bg-[#3c65f5] w-42 hover:bg-[#05264e] hover:-translate-y-0.5 transition text-white ${isJobExpired ? 'cursor-not-allowed' : ''}`} disabled={isJobExpired}><GoVerified /> Apply now</button>
                            <Link to='/' className='btn bg-white w-42 text-black ms-5'>
                                <IoArrowBackCircleOutline /> Back
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Right Sidebar Information */}
                <div className='col-span-1'>
                    <div className='border-1 border-gray-400 rounded-xl'>
                        <div className='flex items-center justify-start gap-8 p-3'>
                            <div>
                                <img src={singleJob.company_logo} className='border-1 p-1 border-gray-300 rounded-md' alt="" />
                            </div>
                            <div>
                                <h1 className='text-[#05264e] text-2xl font-semibold'>{singleJob.company}</h1>
                                <p className='flex items-center'><IoLocationOutline />{singleJob.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;