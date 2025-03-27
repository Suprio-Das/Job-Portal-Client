import { FaDochub, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const JobApply = () => {
    const { id } = useParams();
    const handleJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const newApplication = { linkedin, github, resume };
        console.log(newApplication);
    }
    return (
        <div className='w-[90%] mx-auto  my-5'>
            <div className='w-2/3 shadow-sm p-5 mx-auto rounded-md'>
                <div className='text-center'>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>Job Application</h1>
                    <p>Apply and get a chance to Boost your career.</p>
                </div>

                {/*------------------------------Application Form------------------------------*/}
                <form className='flex flex-col items-center justify-center mt-5' onSubmit={handleJobApplication}>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend"><FaLinkedin className="-mr-1.5" />LinkedIn</legend>
                        <input type="url" className="input w-full" name='linkedin' placeholder="Linkedin Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend"><FaGithub className="-mr-1.5" />GitHub</legend>
                        <input type="url" className="input w-full" name='github' placeholder="Github Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend"><FaBook className="-mr-1.5" />Resume</legend>
                        <input type="url" className="input w-full" name='resume' placeholder="Resume URL" />
                    </fieldset>
                    <button className="btn w-1/2 bg-[#05264e] text-white my-3"><BsBroadcastPin /> Apply</button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;