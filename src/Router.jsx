import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Landing from './pages/Landing';
import Details from './components/Details';
import ActionPage from './pages/ActionPage';

function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/:navSwitch",
            element: <Landing />,
        },
        {
            path: "/:navSwitch/:iid",
            element: <Landing />,
        },
    ]);


    return <RouterProvider router={router} />

}

export default Router