import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const MyApplications = () => {
    const { user } = useAuth();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/jobApplications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppliedJobs(data))
    }, [user.email])
    console.log(appliedJobs);
    return (
        <div>
            <h1 className='text-[#05264e] text-3xl text-center font-semibold my-5 flex justify-center items-center'><RiVerifiedBadgeFill className="text-blue-500" /> My Applications</h1>
        </div>
    );
};

export default MyApplications;