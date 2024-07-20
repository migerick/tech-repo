import React from 'react'
import {createRoot} from 'react-dom/client';
import App from "./App";
import {ErrorPage} from "./pages/ErrorPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {JourneyListPage} from "./pages/JourneyListPage";
import {routes} from "./pages/routes";

import './assets/styles/main.scss'

const container = document.getElementById('root');
const root = createRoot(container!);

const routesApp = routes.map((route) => {
    let element = <div>thanks</div>;
    if (route.id === 1) element = <JourneyListPage/>

    return ({
        path: route.path,
        element: element
    })
})

const routesComponent = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <App/>,
        children: routesApp
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={routesComponent}/>
    </React.StrictMode>
);
