import { FaDochub, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBroadcastPin } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyApplication = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleUpdateApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const updateJobApplication = {
            linkedin,
            github,
            resume
        }

        fetch(`http://localhost:5000/jobApplication/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateJobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Congrats!",
                        text: "You have successfully updated the application",
                        icon: "success"
                    });

                    setTimeout(() => {
                        navigate('/myApplications');
                    }, [1000])
                }
            })
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
                        <input type="url" className="input w-full" name='linkedin' placeholder="Linkedin Profile URL" defaultValue={data.linkedin} />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2 w-full">
                        <legend className="fieldset-legend"><FaGithub className="-mr-1.5" />GitHub</legend>
                        <input type="url" className="input w-full" name='github' placeholder="Github Profile URL" defaultValue={data.github} />
                    </fieldset>
                    <fieldset className="fieldset lg:w-1/2 w-full">
                        <legend className="fieldset-legend"><FaBook className="-mr-1.5" />Resume</legend>
                        <input type="url" className="input w-full" name='resume' placeholder="Resume URL" defaultValue={data.resume} />
                    </fieldset>
                    <button className="btn lg:w-1/2 w-[260px] bg-[#05264e] text-white my-3"><BsBroadcastPin /> Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyApplication;