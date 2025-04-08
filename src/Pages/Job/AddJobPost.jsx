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
                        <input type="text" className="input w-full" name='title' placeholder="Type Job Title Here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input w-full" name='location' placeholder="Type Job Location Here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Select Job Category</legend>
                        <select defaultValue="Pick a Category" className="select" name='category'>
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
                {/*Job Type and Salary*/}
                <div className='grid grid-cols-3 gap-3'>
                    {/* Job Type */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Select Job Type</legend>
                        <select defaultValue="Pick a Category" className="select w-full" name='type'>
                            <option disabled={true}>Pick a Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Intern</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default AddJobPost;