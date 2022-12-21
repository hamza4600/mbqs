import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';

const MainLoginPage = lazy(() => import('./pages/login'));
const ErrorPage = lazy(() => import('./pages/404'));

const InterfacePages = () => {
    
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <Routes>
                    <Route path="/" element={<MainLoginPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default compose(

)(InterfacePages);