import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';
import InterfaceLayout from 'page-componet/layout';
import getUserRole from 'functions/getRole';
import paths from './paths';

const AuthPages = () => (
    <>
        <InterfaceLayout blurnav={false}>
            <Suspense fallback={<PageSpinner />}>
                <Routes>
                    {paths.map((path) => (
                        <Route
                            key={path.id}
                            path={path.path}
                            element={path.component} />
                    ))}
                </Routes>
            </Suspense>
        </InterfaceLayout>
    </>
)

export default compose(
    getUserRole() // check user role Auth or not Set Page Title
)(AuthPages);