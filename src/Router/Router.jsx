import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/Job/JobDetails';
import PrivateRoutes from './PrivateRoutes';
import JobApply from '../Pages/JobApply/JobApply';
import MyApplications from '../Pages/MyApplications/MyApplications';
import UpdateMyApplication from '../Pages/MyApplications/UpdateMyApplication';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoutes>
                    <JobDetails></JobDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoutes>
                    <JobApply></JobApply>
                </PrivateRoutes>
            },
            {
                path: '/myApplications',
                element: <PrivateRoutes>
                    <MyApplications></MyApplications>
                </PrivateRoutes>
            },
            {
                path: '/updateApplication/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobApplication/${params.id}`),
                element: <UpdateMyApplication></UpdateMyApplication>
            }
        ]
    }
])

export default router;