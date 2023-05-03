import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';
import { useSelector } from "react-redux"

const MainLoginPage = lazy(() => import('./pages/login'));
const ErrorPage = lazy(() => import('./pages/404'));

const InterfacePages = () => {

    const user = useSelector((state) => state.session)

    useEffect(() => {
        if (user.isAuthenticated && user.isLogedIn && user.authToken !== "" && user.user.id !== "") {
            window.location.href = "auth/panel"
        }
    },[user.authToken, user.isAuthenticated, user.isLogedIn, user.user.id])
    
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