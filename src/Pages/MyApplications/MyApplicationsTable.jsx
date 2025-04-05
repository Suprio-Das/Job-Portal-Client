import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const MyApplicationsTable = ({ appliedJobs }) => {
    const handleDeleteApplication = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobApplication/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your application has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='text-center'>
                    <tr>
                        <th>Company Details</th>
                        <th>Job Title</th>
                        <th>Deadline</th>
                        <th>View Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        appliedJobs.map((job, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="flex justify-center items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt={`${job.title} logo`} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                </td>
                                <td>{job.applicationDeadline}</td>
                                <th>
                                    <Link to={`/jobs/${job.job_id}`} className="btn btn-ghost btn-xs">Details</Link>
                                </th>
                                <th>
                                    <Link to={`/updateApplication/${job._id}`} className="btn btn-ghost btn-xs bg-yellow-500"><FaRegPenToSquare />Update</Link>
                                    <button onClick={() => handleDeleteApplication(job._id)} className="btn btn-ghost btn-xs bg-red-600 text-white ms-2"><MdDoNotDisturbAlt /> Delete</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplicationsTable;