import { FaDochub, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const UpdateMyApplication = () => {
    const data = useLoaderData();
    console.log(data);
    const handleUpdateApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            linkedin,
            github,
            resume
        }
        console.log(jobApplication);
    }
    return (
        <div className='lg:w-[90%] w-full lg:min-h-[calc(100vh-75px)] flex items-center mx-auto'>
            <div className='lg:w-2/3 w-full shadow-sm p-8 mx-auto rounded-md border-1 border-gray-400'>
                <div className='text-center'>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>Update Job Application</h1>
                    <p>Update your job application before deadline crossed.</p>
                </div>
                <form className='flex flex-col items-center justify-center mt-5' onSubmit={handleUpdateApplication}>
                    <fieldset className="fieldset lg:w-1/2 w-full">
                        <legend className="fieldset-legend "><FaLinkedin className="-mr-1.5" />LinkedIn</legend>
                        <input type="url" className="input w-full" name='linkedin' placeholder="Linkedin Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2 w-full">
                        <legend className="fieldset-legend"><FaGithub className="-mr-1.5" />GitHub</legend>
                        <input type="url" className="input w-full" name='github' placeholder="Github Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2 w-full">
                        <legend className="fieldset-legend"><FaBook className="-mr-1.5" />Resume</legend>
                        <input type="url" className="input w-full" name='resume' placeholder="Resume URL" />
                    </fieldset>
                    <button className="btn lg:w-1/2 w-[260px] bg-[#05264e] text-white my-3"><BsBroadcastPin /> Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyApplication;