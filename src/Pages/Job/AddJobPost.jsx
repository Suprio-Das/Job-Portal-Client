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
                <div className='grid grid-cols-3 gap-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Job Title</legend>
                        <input type="text" className="input w-full" name='title' placeholder="Type Job Title Here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input w-full" name='location' placeholder="Type Job Location Here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" className="input w-full" name='category' placeholder="e.g. Engineering, Marketing etc." />
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default AddJobPost;