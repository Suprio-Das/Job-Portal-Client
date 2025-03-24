import { IoBagCheckOutline } from "react-icons/io5";

const JobCard = ({ job }) => {
    const { _id, title, company, company_logo, location, jobType, description, requirements, salaryRange } = job;
    return (
        <div className="max-w-sm bg-[#f8faff] rounded-2xl p-6 border border-gray-200 hover:bg-white">
            <div className="flex items-center gap-3 mb-3">
                <img src={company_logo} alt="Company Logo" className="w-10 h-10" />
                <div>
                    <h3 className="text-lg font-semibold">{company}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>

            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-2 flex items-center"><IoBagCheckOutline></IoBagCheckOutline> {jobType}</p>

            <p className="text-gray-600 mb-3 py-3">
                {description.split(" ").slice(0, 15).join(" ")}...
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {
                    requirements.map(requirement => <span className="px-2 py-1 text-xs bg-[#e0e6f7] text-gray-700 rounded-lg  hover:bg-[#3c65f5] hover:text-white transition">{requirement}</span>)
                }
            </div>

            <div className="flex justify-between items-center">
                <p className="text-[#3c65f5] text-lg font-bold">
                    <span className="text-xs font-normal text-gray-600">{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</span></p>
                <button className="bg-[#e0e6f7] text-[#3c65f5] text-sm px-3 py-2 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white transition">Apply Now</button>
            </div>
        </div>
    );
};

export default JobCard;