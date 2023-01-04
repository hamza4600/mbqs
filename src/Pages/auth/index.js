import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';

const Dashboard = lazy(() => import('./pages/dashboard'));

const paths = [
    {
        id: 1,
        path: '/panel',
        component: Dashboard,
    }
    
]
const AuthPages = () => (
    <>
        <Suspense fallback={<PageSpinner />}>
            <Routes>
                {paths.map((path) => (
                    <Route
                        key={path.id}
                        path={path.path}
                        element={<path.component />} />
                ))}
            </Routes>
        </Suspense>
    </>
)

export default compose(

)(AuthPages);