import { FaDochub, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    console.log(id);
    const { user } = useAuth();
    const handleJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch('http://localhost:5000/jobApplications', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congrats!",
                        text: "You have successfully submitted the application",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className='lg:w-[90%] w-full lg:min-h-[calc(100vh-75px)] flex items-center mx-auto'>
            <div className='lg:w-2/3 w-full shadow-sm p-8 mx-auto rounded-md border-1 border-gray-400'>
                <div className='text-center'>
                    <h1 className='text-[#05264e] text-3xl font-semibold'>Job Application</h1>
                    <p>Apply and get a chance to Boost your career.</p>
                </div>

                {/*------------------------------Application Form------------------------------*/}
                <form className='flex flex-col items-center justify-center mt-5' onSubmit={handleJobApplication}>
                    <fieldset className="fieldset lg:w-1/2">
                        <legend className="fieldset-legend"><FaLinkedin className="-mr-1.5" />LinkedIn</legend>
                        <input type="url" className="input w-full" name='linkedin' placeholder="Linkedin Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2">
                        <legend className="fieldset-legend"><FaGithub className="-mr-1.5" />GitHub</legend>
                        <input type="url" className="input w-full" name='github' placeholder="Github Profile URL" />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2">
                        <legend className="fieldset-legend"><FaBook className="-mr-1.5" />Resume</legend>
                        <input type="url" className="input w-full" name='resume' placeholder="Resume URL" />
                    </fieldset>
                    <button className="btn lg:w-1/2 bg-[#05264e] text-white my-3"><BsBroadcastPin /> Apply</button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;