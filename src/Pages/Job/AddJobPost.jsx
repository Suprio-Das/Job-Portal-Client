import React from 'react';

const AddJobPost = () => {
    return (
        <div className='w-[90%] mx-auto shadow-sm px-8 py-5 my-5'>
            <h1 className='text-3xl font-semibold'>Add New Job</h1>
            <p>Please fill the form below to add a new <span className='font-semibold'>JOB POST.</span></p>
            <div className='divider'></div>

            {/* ---------------------------------Add New Job Form--------------------------------- */}
            <form>
                {/* Job Title , Location , Category */}
                <div className='grid grid-cols-3 gap-3 mb-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Job Title</legend>
                        <input type="text" className="input w-full" name='title' placeholder="Type Job Title Here" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input w-full" name='location' placeholder="Type Job Location Here" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Select Job Category</legend>
                        <select defaultValue="Pick a Category" className="select w-full" name='category' required>
                            <option disabled={true}>Pick a Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Design</option>
                            <option>Development</option>
                            <option>Teaching</option>
                            <option>Management</option>
                            <option>Data Science</option>
                            <option>Health</option>
                        </select>
                    </fieldset>
                </div>
                {/*Job Salary*/}
                <div className='grid grid-cols-3 gap-3 mb-5'>
                    {/* Salary */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Min Salary</legend>
                        <input type='number' className="input w-full" name='min' placeholder="Type Minimum Salary Here" required />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Max Salary</legend>
                        <input type='number' className="input w-full" name='max' placeholder="Type Maximum Salary Here" required />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Select Currency</legend>
                        <select defaultValue="Pick a Category" className="select w-full" name='currency' required>
                            <option disabled={true}>Pick a Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>CAD</option>
                            <option>RS</option>
                        </select>
                    </fieldset>
                </div>
                {/* Job type,deadline and status */}
                <div className='grid grid-cols-3 gap-3 mb-5'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Select Job Type</legend>
                        <select defaultValue="Pick a Type" className="select w-full" name='type' required>
                            <option disabled={true}>Pick a Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Intern</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Select Application Deadline</legend>
                        <input type="date" className="input w-full" name='deadline' required />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Select Job Status</legend>
                        <select defaultValue="Pick a Type" className="select w-full" name='status' required>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </fieldset>
                </div>
                {/* Job Description */}
                <div className='mb-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea w-full h-24" name='description' placeholder="Write Job Description Here..." required></textarea>
                    </fieldset>
                </div>
                {/* Job Requirements and Responsibilities */}
                <div className='grid grid-cols-2 gap-3 mb-5'>
                    <div className='mb-5'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Job Requirements</legend>
                            <textarea className="textarea w-full h-24" name='requirements' placeholder="e.g. Javascript, React, Node JS, ..." required></textarea>
                        </fieldset>
                    </div>
                    <div className='mb-5'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Job Responsibilities</legend>
                            <textarea className="textarea w-full h-24" name='responsibilities' placeholder="e.g. Develop and maintain software, Collaborate with the team, Participate in code reviews, ..." required></textarea>
                        </fieldset>
                    </div>
                </div>
                {/* Company Name , email and Logo */}
                <div className='grid grid-cols-3 gap-3 mb-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Company Name</legend>
                        <input type="text" className="input w-full" name='company_name' placeholder="Type Company Name Here" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">HR Email</legend>
                        <input type="text" className="input w-full" name='hr_email' placeholder="Type HR Email Here" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Company Logo</legend>
                        <input type="text" className="input w-full" placeholder='Enter Company Logo URL' required />
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default AddJobPost;