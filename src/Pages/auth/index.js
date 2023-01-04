import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { compose } from "redux";
import PageSpinner from 'components/pageSpinner';
import InterfaceLayout from 'page-componet/layout';
import getUserRole from 'functions/getRole';
import paths from './routes';

const detail = {
    name: "user",
    title: "User",
    roleID: "userID",
    role: "user",
    login: "/",
};

const AuthPages = () => (
    <>
        <Suspense fallback={<PageSpinner />}>
            <InterfaceLayout>
                <Routes>
                    {paths.map((path) => (
                        <Route
                            key={path.id}
                            path={path.path}
                            element={path.component} />
                    ))}
                </Routes>
            </InterfaceLayout>
        </Suspense>
    </>
)

export default compose(
    getUserRole(detail) // check user role Auth or not Set Page Title
)(AuthPages);