import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import MyApplicationsTable from "./MyApplicationsTable";

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
        <div className="w-[90%] mx-auto">
            <h1 className='text-[#05264e] text-3xl text-center font-semibold my-5 flex justify-center items-center'>My Applications <RiVerifiedBadgeFill className="text-blue-500 ml-2" /> </h1>
            <MyApplicationsTable></MyApplicationsTable>
        </div>
    );
};

export default MyApplications;