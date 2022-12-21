import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';

const Dashboard = lazy(() => import('./pages/dashboard'));
 
const AuthPages = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Routes>
                    <Route path="/panel" element={<Dashboard />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default compose(

)(AuthPages);