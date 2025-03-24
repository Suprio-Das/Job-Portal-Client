import React from 'react';

const JobCard = () => {
    return (
        <div className="max-w-sm bg-[#f8faff] rounded-2xl p-6 border border-gray-200 hover:bg-white">
            <div className="flex items-center gap-3 mb-3">
                <img src="https://i.ibb.co/T1XRmbX/linkedin.png" alt="Company Logo" className="w-10 h-10" />
                <div>
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <p className="text-sm text-gray-500">New York, US</p>
                </div>
            </div>

            <h2 className="text-lg font-bold mb-2">UI / UX Designer Fulltime</h2>
            <p className="text-sm text-gray-500 mb-2"> Fulltime · 4 minutes ago</p>

            <p className="text-gray-600 mb-3 py-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                eveniet, dolor quo repellendus pariatur.
            </p>

            <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-[#e0e6f7] text-gray-700 rounded-lg hover:bg-[#3c65f5] hover:text-white transition">Adobe XD</span>
                <span className="px-2 py-1 text-xs bg-[#e0e6f7] text-gray-700 rounded-lg hover:bg-[#3c65f5] hover:text-white transition">Figma</span>
                <span className="px-2 py-1 text-xs bg-[#e0e6f7] text-gray-700 rounded-lg hover:bg-[#3c65f5] hover:text-white transition">Photoshop</span>
            </div>

            <div className="flex justify-between items-center">
                <p className="text-[#3c65f5] text-lg font-bold">
                    <span className="text-2xl">$500</span>
                    <span className="text-xs font-normal text-gray-600">/Hour</span></p>
                <button className="bg-[#e0e6f7] text-[#3c65f5] text-sm px-3 py-2 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white transition">Apply Now</button>
            </div>
        </div>
    );
};

export default JobCard;