import React from 'react';

const JobApply = () => {
    return (
        <div className='w-[90%] mx-auto  my-5'>
            <div className='w-2/3 shadow-sm p-5 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>Job Application</h1>
                    <p>Apply and get a chance to Boost your career.</p>
                </div>

                {/*------------------------------Application Form------------------------------*/}
                <form className='flex flex-col items-center justify-center mt-5'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Linkedin</legend>
                        <input type="text" className="input w-full" name='linkedin' placeholder="Linkedin Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Github</legend>
                        <input type="text" className="input w-full" name='linkedin' placeholder="Github Profile URL" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;